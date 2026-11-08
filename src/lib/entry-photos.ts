import { readdirSync } from "node:fs";
import path from "node:path";

import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { ResolvedPhoto } from "@/data/shared";

export const MAX_ENTRY_PHOTOS = 4;

export type EntrySection = "experiences" | "certificates";

const PUBLIC_DIR = path.join(process.cwd(), "public");

function listPhotoFiles(section: EntrySection, slug: string) {
  try {
    return new Set(readdirSync(path.join(PUBLIC_DIR, "images", section, slug)));
  } catch {
    return new Set<string>();
  }
}

async function getAltFormatter(section: EntrySection, locale: Locale) {
  if (section === "experiences") {
    const t = await getTranslations({ locale, namespace: "Experiences" });
    return (label: string, n: number) =>
      t("photoAlt", { organization: label, n });
  }
  const t = await getTranslations({ locale, namespace: "Certificates" });
  return (label: string, n: number) => t("photoAlt", { title: label, n });
}

export async function getEntryPhotos(
  section: EntrySection,
  slug: string,
  label: string,
  locale: Locale,
): Promise<ResolvedPhoto[]> {
  const formatAlt = await getAltFormatter(section, locale);
  const files = listPhotoFiles(section, slug);
  const photos: ResolvedPhoto[] = [];

  for (let n = 1; n <= MAX_ENTRY_PHOTOS; n++) {
    const name = `${n}.webp`;
    if (!files.has(name)) continue;
    photos.push({
      src: `/images/${section}/${slug}/${name}`,
      alt: formatAlt(label, n),
    });
  }

  return photos;
}
