import { useTranslations } from "next-intl";

import { EntryDialog, entryActionClass } from "@/components/sections/EntryDialog";
import type { ResolvedProject } from "@/data/projects";

type ProjectDialogProps = {
  project: ResolvedProject;
};

export function ProjectDialog({ project }: ProjectDialogProps) {
  const t = useTranslations("Projects");
  const { title } = project;

  return (
    <EntryDialog
      roleId={`project-${project.slug}-role`}
      title={title}
      summary={project.summary}
      technologies={project.technologies}
      role={project.role}
      photos={project.photos}
      labels={{
        seeDetails: t("seeDetails"),
        seeDetailsFor: t("seeDetailsFor", { title }),
        close: t("close"),
        photos: t("photos", { title }),
        technologies: t("technologies"),
        role: t("role"),
      }}
      actions={
        project.links.length > 0 &&
        project.links.map((link, index) => {
          const label = link.label ?? t(`links.${link.type}`);
          return (
            <a
              key={`${index}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("newTab", { label })}
              className={entryActionClass("default")}
            >
              {label}
            </a>
          );
        })
      }
    />
  );
}
