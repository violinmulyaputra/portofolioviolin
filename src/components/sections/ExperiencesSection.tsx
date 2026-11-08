import { getLocale, getTranslations } from "next-intl/server";

import {
  CarouselSection,
  type SectionSpacingBottom,
  type SectionSpacingTop,
} from "@/components/sections/CarouselSection";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { getResolvedExperiences } from "@/lib/resolved-experiences";

type ExperiencesSectionProps = {
  spacingTop?: SectionSpacingTop;
  spacingBottom?: SectionSpacingBottom;
};

export async function ExperiencesSection({
  spacingTop,
  spacingBottom,
}: ExperiencesSectionProps) {
  const t = await getTranslations("Experiences");
  const experiences = await getResolvedExperiences(await getLocale());

  return (
    <CarouselSection
      id="experiences"
      title={t("sectionTitle")}
      intro={t("sectionIntro")}
      carouselLabel={t("carouselLabel")}
      previousLabel={t("previous")}
      nextLabel={t("next")}
      seeAllHref="/experiences"
      seeAllLabel={t("seeAll")}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.slug}
          experience={experience}
          sizes={CARD_PHOTO_SIZES}
        />
      ))}
    </CarouselSection>
  );
}
