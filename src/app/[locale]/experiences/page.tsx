import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/sections/CardGrid";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { getResolvedExperiences } from "@/lib/resolved-experiences";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ExperiencesPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default async function ExperiencesPage() {
  const t = await getTranslations("ExperiencesPage");
  const experiences = await getResolvedExperiences(await getLocale());

  return (
    <PageShell title={t("title")} intro={t("intro")}>
      <CardGrid>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.slug}
            experience={experience}
            headingLevel="h2"
            sizes={CARD_PHOTO_SIZES}
            aboveFold={index === 0}
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
