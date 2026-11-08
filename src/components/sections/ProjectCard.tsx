import { useTranslations } from "next-intl";

import { EntryCard } from "@/components/sections/EntryCard";
import { ProjectDialog } from "@/components/sections/ProjectDialog";
import type { ResolvedProject } from "@/data/projects";

type ProjectCardProps = {
  project: ResolvedProject;
  headingLevel?: "h2" | "h3";
  sizes: string;
  aboveFold?: boolean;
  className?: string;
};

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  const t = useTranslations("Projects");

  return (
    <EntryCard
      titleId={`project-${project.slug}-title`}
      title={project.title}
      summary={project.summary}
      technologies={project.technologies}
      technologiesLabel={t("technologies")}
      photos={project.photos}
      photosLabel={t("photos", { title: project.title })}
      action={<ProjectDialog project={project} />}
      {...props}
    />
  );
}
