import { getLocale, getTranslations } from "next-intl/server";

import {
  CarouselSection,
  type SectionSpacingBottom,
  type SectionSpacingTop,
} from "@/components/sections/CarouselSection";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getResolvedProjects } from "@/lib/resolved-projects";

type ProjectsSectionProps = {
  spacingTop?: SectionSpacingTop;
  spacingBottom?: SectionSpacingBottom;
};

export async function ProjectsSection({
  spacingTop,
  spacingBottom,
}: ProjectsSectionProps) {
  const t = await getTranslations("Projects");
  const projects = await getResolvedProjects(await getLocale());
  if (projects.length === 0) return null;

  return (
    <CarouselSection
      id="projects"
      title={t("sectionTitle")}
      intro={t("sectionIntro")}
      carouselLabel={t("carouselLabel")}
      previousLabel={t("previous")}
      nextLabel={t("next")}
      seeAllHref="/projects"
      seeAllLabel={t("seeAll")}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} sizes={CARD_PHOTO_SIZES} />
      ))}
    </CarouselSection>
  );
}
