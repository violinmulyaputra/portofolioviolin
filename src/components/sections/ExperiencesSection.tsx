import { getLocale, getTranslations } from "next-intl/server";

import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { CardCarousel } from "@/components/sections/CardCarousel";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getResolvedExperiences } from "@/lib/experience-photos";

const CARD_SIZES =
  "(min-width: 75rem) 350px, (min-width: 64rem) 30vw, (min-width: 48rem) 45vw, calc(100vw - 64px)";

export async function ExperiencesSection() {
  const t = await getTranslations("Experiences");
  const experiences = await getResolvedExperiences(await getLocale());

  return (
    <Reveal
      labelledBy="experiences-title"
      className="py-section md:py-section-desktop"
    >
      <div className="container-content">
        <RevealItem className="text-center">
          <h2
            id="experiences-title"
            className="font-display text-section font-medium text-rose"
          >
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead text-muted-foreground">
            {t("sectionIntro")}
          </p>
        </RevealItem>

        <div className="mt-8 md:mt-12">
          <CardCarousel
            label={t("carouselLabel")}
            previousLabel={t("previous")}
            nextLabel={t("next")}
            footer={
              <Link href="/experiences" className={buttonVariants({ size: "sm" })}>
                {t("seeAll")}
                <ArrowIcon className="size-4 md:size-5" />
              </Link>
            }
          >
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                sizes={CARD_SIZES}
              />
            ))}
          </CardCarousel>
        </div>
      </div>
    </Reveal>
  );
}
