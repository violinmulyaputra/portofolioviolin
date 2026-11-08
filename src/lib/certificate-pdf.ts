import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const PDF_FILE = "certificate.pdf";
const DOCS_DIR = path.join(process.cwd(), "public", "docs", "certificates");

export function getCertificatePdf(slug: string): string | null {
  try {
    const dir = path.join(DOCS_DIR, slug);
    if (!readdirSync(dir).includes(PDF_FILE)) return null;
    if (!statSync(path.join(dir, PDF_FILE)).isFile()) return null;
    return `/docs/certificates/${slug}/${PDF_FILE}`;
  } catch {
    return null;
  }
}
