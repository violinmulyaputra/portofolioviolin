import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/sections/CardGrid";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getResolvedProjects } from "@/lib/resolved-projects";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectsPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");
  const projects = await getResolvedProjects(await getLocale());

  if (projects.length === 0) {
    return <PageShell title={t("title")} intro={t("empty")} />;
  }

  return (
    <PageShell title={t("title")} intro={t("intro")}>
      <CardGrid centerSparse>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            headingLevel="h2"
            sizes={CARD_PHOTO_SIZES}
            aboveFold={index === 0}
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
