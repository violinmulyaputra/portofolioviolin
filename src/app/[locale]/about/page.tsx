import type { ReactNode } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { AboutScene } from "@/components/about/AboutScene";
import type { SceneKey } from "@/components/about/about-scene-layout";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { REVEAL_STAGGER_S } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SECTIONS: { scene: SceneKey; reverse: boolean; reveal: boolean }[] = [
  { scene: "intro", reverse: false, reveal: false },
  { scene: "roots", reverse: true, reveal: true },
  { scene: "growth", reverse: false, reveal: true },
];

const PARAGRAPHS = ["p1", "p2", "p3"] as const;

const SCENE_CLASS = "area-scene min-w-0";
const TEXT_CLASS =
  "area-text about-prose w-full max-w-about-text justify-self-center text-about md:justify-self-start md:text-about-desktop";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const bold = (chunks: ReactNode) => <b>{chunks}</b>;

  return (
    <PageShell title={t("title")} className="overflow-x-clip">
      <div className="mt-8 flex flex-col gap-12 md:mt-12 md:gap-16">
        {SECTIONS.map(({ scene, reverse, reveal }) => {
          const sectionClass = cn("about-section", reverse && "about-section-reverse");
          const sceneNode = <AboutScene scene={scene} />;
          const textNode = PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{t.rich(`sections.${scene}.${paragraph}`, { b: bold })}</p>
          ));

          if (!reveal) {
            return (
              <section key={scene} className={sectionClass}>
                <div className={SCENE_CLASS}>{sceneNode}</div>
                <div className={TEXT_CLASS}>{textNode}</div>
              </section>
            );
          }

          return (
            <Reveal key={scene} className={sectionClass}>
              <RevealItem className={SCENE_CLASS}>{sceneNode}</RevealItem>
              <RevealItem className={TEXT_CLASS} delay={REVEAL_STAGGER_S}>
                {textNode}
              </RevealItem>
            </Reveal>
          );
        })}
      </div>
    </PageShell>
  );
}
