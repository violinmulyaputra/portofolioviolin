import type { Locale } from "next-intl";

import {
  PROJECTS,
  resolveProject,
  type ResolvedProject,
} from "@/data/projects";
import { getEntryPhotos } from "@/lib/entry-photos";

export async function getResolvedProjects(
  locale: Locale,
): Promise<ResolvedProject[]> {
  return Promise.all(
    PROJECTS.map(async (project) =>
      resolveProject(
        project,
        locale,
        await getEntryPhotos("projects", project.slug, project.title[locale], locale),
      ),
    ),
  );
}
