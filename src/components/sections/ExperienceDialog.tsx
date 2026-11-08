"use client";

import { useTranslations } from "next-intl";

import { CurrentBadge } from "@/components/sections/CurrentBadge";
import { DetailDialog } from "@/components/sections/DetailDialog";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { DIALOG_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ResolvedExperience } from "@/data/experiences";

type ExperienceDialogProps = {
  experience: ResolvedExperience;
};

export function ExperienceDialog({ experience }: ExperienceDialogProps) {
  const t = useTranslations("Experiences");
  const activitiesId = `experience-${experience.slug}-activities`;

  return (
    <DetailDialog
      triggerLabel={t("seeDetails")}
      triggerAriaLabel={t("seeDetailsFor", { role: experience.role })}
      closeLabel={t("close")}
    >
      <PhotoCarousel
        photos={experience.photos}
        label={t("photos", { role: experience.role })}
        sizes={DIALOG_PHOTO_SIZES}
        variant="dialog"
      />
      <div className="mt-6 flex flex-col gap-1">
        <p className="text-base font-bold text-muted-foreground">
          {experience.organization}
        </p>
        <DialogTitle className="text-2xl leading-tight md:text-3xl">
          {experience.role}
        </DialogTitle>
        <p className="flex flex-wrap items-center gap-2 text-base text-muted-foreground">
          <span>{experience.period}</span>
          {experience.current && <CurrentBadge label={t("current")} />}
        </p>
      </div>
      <DialogDescription className="mt-4">{experience.summary}</DialogDescription>
      <section aria-labelledby={activitiesId} className="mt-6">
        <h3
          id={activitiesId}
          className="font-display text-xl font-medium text-foreground"
        >
          {t("keyActivities")}
        </h3>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-base leading-body text-foreground marker:text-rose">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
    </DetailDialog>
  );
}
