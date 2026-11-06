import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import sharp from "sharp";

const ROOT = process.cwd();
const CV_DIR = path.join(ROOT, "public", "cv");
const LOCALES = ["en", "id"];
const OUTPUT_WIDTH = 800;
const RENDER_WIDTH = 1200;
const RENDER_HEIGHT = 1800;
const PORT = 9555;

const BROWSERS = [
  process.env.CV_PREVIEW_BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/microsoft-edge",
].filter(Boolean);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Browser
function findBrowser() {
  const found = BROWSERS.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error("Chrome or Edge not found. Set CV_PREVIEW_BROWSER to its path.");
  }
  return found;
}

async function openPage() {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      const page = targets.find((target) => target.type === "page");
      if (page) {
        const socket = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise((resolve) => socket.addEventListener("open", resolve));
        return socket;
      }
    } catch {}
    await sleep(250);
  }
  throw new Error("Browser did not start.");
}

function createClient(socket) {
  let nextId = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  });
  return (method, params = {}) => {
    const id = ++nextId;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) =>
      pending.set(id, (message) =>
        message.error ? reject(new Error(message.error.message)) : resolve(message.result),
      ),
    );
  };
}

// Crop
const isWhite = (data, i) => data[i] > 250 && data[i + 1] > 250 && data[i + 2] > 250;

async function cropFirstPage(png) {
  const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const at = (x, y) => (y * info.width + x) * 3;
  const midY = Math.round(info.height / 3);

  let left = 0;
  while (left < info.width && !isWhite(data, at(left, midY))) left++;
  let right = info.width - 1;
  while (right > left && !isWhite(data, at(right, midY))) right--;

  const marginX = left + 4;
  let top = midY;
  while (top > 0 && isWhite(data, at(marginX, top - 1))) top--;
  let bottom = midY;
  while (bottom < info.height - 1 && isWhite(data, at(marginX, bottom + 1))) bottom++;

  const width = right - left + 1;
  const height = bottom - top + 1;
  if (width < info.width / 3 || height < width) {
    throw new Error(`Could not find the first page (${width}x${height}).`);
  }
  return { left, top, width, height };
}

// Render
async function renderPreview(send, pdfPath, outPath) {
  await send("Page.navigate", {
    url: `${pathToFileURL(pdfPath).href}#toolbar=0&navpanes=0&view=FitH`,
  });
  await sleep(4000);
  const { data } = await send("Page.captureScreenshot", { format: "png" });
  const png = Buffer.from(data, "base64");
  const box = await cropFirstPage(png);
  const info = await sharp(png)
    .extract(box)
    .resize({ width: OUTPUT_WIDTH })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  return `${path.relative(ROOT, outPath)} ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`;
}

async function main() {
  const jobs = LOCALES.map((locale) => ({
    pdf: path.join(CV_DIR, `cv-${locale}.pdf`),
    out: path.join(CV_DIR, `cv-${locale}-preview.webp`),
  })).filter((job) => existsSync(job.pdf));
  if (jobs.length === 0) throw new Error("No CV PDF found in public/cv.");

  const profile = mkdtempSync(path.join(tmpdir(), "cv-preview-"));
  const browser = spawn(
    findBrowser(),
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${profile}`,
      `--window-size=${RENDER_WIDTH},${RENDER_HEIGHT}`,
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    const socket = await openPage();
    const send = createClient(socket);
    await send("Page.enable");
    await send("Emulation.setDeviceMetricsOverride", {
      width: RENDER_WIDTH,
      height: RENDER_HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
    });
    for (const job of jobs) {
      console.log(await renderPreview(send, job.pdf, job.out));
    }
    socket.close();
  } finally {
    browser.kill();
    await sleep(500);
    rmSync(profile, { recursive: true, force: true, maxRetries: 5 });
  }
}

await main();
