import { statSync } from "node:fs";
import path from "node:path";

export function publicFileSizeKb(href: string): number {
  const { size } = statSync(path.join(process.cwd(), "public", href));
  return Math.max(1, Math.round(size / 1024));
}
