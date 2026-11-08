import { readdirSync } from "node:fs";
import path from "node:path";

import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import {
  EXPERIENCES,
  resolveExperience,
  type ResolvedExperience,
  type ResolvedPhoto,
} from "@/data/experiences";

export const MAX_EXPERIENCE_PHOTOS = 4;

const PHOTO_URL_DIR = "/images/experiences";
const PHOTO_FS_DIR = path.join(process.cwd(), "public", "images", "experiences");

function listPhotoFiles(slug: string) {
  try {
    return new Set(readdirSync(path.join(PHOTO_FS_DIR, slug)));
  } catch {
    return new Set<string>();
  }
}

export async function getExperiencePhotos(
  slug: string,
  organization: string,
  locale: Locale,
): Promise<ResolvedPhoto[]> {
  const t = await getTranslations({ locale, namespace: "Experiences" });
  const files = listPhotoFiles(slug);
  const photos: ResolvedPhoto[] = [];

  for (let n = 1; n <= MAX_EXPERIENCE_PHOTOS; n++) {
    const name = `${n}.webp`;
    if (!files.has(name)) continue;
    photos.push({
      src: `${PHOTO_URL_DIR}/${slug}/${name}`,
      alt: t("photoAlt", { organization, n }),
    });
  }

  return photos;
}

export async function getResolvedExperiences(
  locale: Locale,
): Promise<ResolvedExperience[]> {
  return Promise.all(
    EXPERIENCES.map(async (experience) =>
      resolveExperience(
        experience,
        locale,
        await getExperiencePhotos(
          experience.slug,
          experience.organization,
          locale,
        ),
      ),
    ),
  );
}
