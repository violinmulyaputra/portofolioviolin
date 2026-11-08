import { useTranslations } from "next-intl";

import { CurrentBadge } from "@/components/sections/CurrentBadge";
import { ExperienceDialog } from "@/components/sections/ExperienceDialog";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import type { ResolvedExperience } from "@/data/experiences";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  experience: ResolvedExperience;
  headingLevel?: "h2" | "h3";
  sizes: string;
  aboveFold?: boolean;
  className?: string;
};

export function ExperienceCard({
  experience,
  headingLevel: Heading = "h3",
  sizes,
  aboveFold = false,
  className,
}: ExperienceCardProps) {
  const t = useTranslations("Experiences");
  const titleId = `experience-${experience.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "card-lift flex h-full flex-col gap-4 rounded-card bg-card p-4 shadow-soft",
        className,
      )}
    >
      <PhotoCarousel
        photos={experience.photos}
        label={t("photos", { role: experience.role })}
        sizes={sizes}
        aboveFold={aboveFold}
      />
      <div className="flex flex-1 flex-col gap-1 px-1">
        <p className="text-base font-bold text-muted-foreground">
          {experience.organization}
        </p>
        <Heading
          id={titleId}
          className="font-display text-2xl leading-tight font-medium text-foreground"
        >
          {experience.role}
        </Heading>
        <p className="flex flex-wrap items-center gap-2 text-base text-muted-foreground">
          <span>{experience.period}</span>
          {experience.current && <CurrentBadge label={t("current")} />}
        </p>
        <p className="mt-2 line-clamp-2 text-base leading-body text-foreground">
          {experience.summary}
        </p>
        <div className="mt-auto pt-4">
          <ExperienceDialog experience={experience} />
        </div>
      </div>
    </article>
  );
}
