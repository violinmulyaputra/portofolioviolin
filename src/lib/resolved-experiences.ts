import type { Locale } from "next-intl";

import {
  EXPERIENCES,
  resolveExperience,
  type ResolvedExperience,
} from "@/data/experiences";
import { getEntryPhotos } from "@/lib/entry-photos";

export async function getResolvedExperiences(
  locale: Locale,
): Promise<ResolvedExperience[]> {
  return Promise.all(
    EXPERIENCES.map(async (experience) =>
      resolveExperience(
        experience,
        locale,
        await getEntryPhotos(
          "experiences",
          experience.slug,
          experience.organization,
          locale,
        ),
      ),
    ),
  );
}
