import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import type { ResolvedExperience } from "@/data/experiences";
import { getResolvedExperiences } from "@/lib/experience-photos";

const GROUP_SIZE = 6;
const CARD_SIZES =
  "(min-width: 75rem) 350px, (min-width: 64rem) 30vw, (min-width: 48rem) 45vw, calc(100vw - 64px)";
const GRID_CLASS = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";

function chunk(items: readonly ResolvedExperience[], size: number) {
  const groups: ResolvedExperience[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ExperiencesPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default async function ExperiencesPage() {
  const t = await getTranslations("ExperiencesPage");
  const experiences = await getResolvedExperiences(await getLocale());
  const groups = chunk(experiences, GROUP_SIZE);

  return (
    <PageShell title={t("title")} intro={t("intro")}>
      <div className="mt-8 flex flex-col gap-6 md:mt-12">
        {groups.map((group, index) => {
          const list = (
            <ul className={GRID_CLASS}>
              {group.map((experience, position) => (
                <li key={experience.slug}>
                  <ExperienceCard
                    experience={experience}
                    headingLevel="h2"
                    sizes={CARD_SIZES}
                    aboveFold={index === 0 && position === 0}
                  />
                </li>
              ))}
            </ul>
          );

          if (index === 0) return <div key={index}>{list}</div>;

          return (
            <Reveal key={index}>
              <RevealItem>{list}</RevealItem>
            </Reveal>
          );
        })}
      </div>
    </PageShell>
  );
}
