import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { CardCarousel } from "@/components/sections/CardCarousel";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type SectionSpacingTop = "section" | "pair";
export type SectionSpacingBottom = "section" | "pair" | "footer";

const SPACING_TOP: Record<SectionSpacingTop, string> = {
  section: "pt-section md:pt-section-desktop",
  pair: "pt-4 md:pt-6",
};

const SPACING_BOTTOM: Record<SectionSpacingBottom, string> = {
  section: "pb-section md:pb-section-desktop",
  pair: "pb-4 md:pb-6",
  footer: "pb-8 md:pb-12",
};

type CarouselSectionProps = {
  id: string;
  title: string;
  intro: string;
  carouselLabel: string;
  previousLabel: string;
  nextLabel: string;
  seeAllHref: "/projects" | "/experiences" | "/certificates";
  seeAllLabel: string;
  spacingTop?: SectionSpacingTop;
  spacingBottom?: SectionSpacingBottom;
  children: ReactNode;
};

export function CarouselSection({
  id,
  title,
  intro,
  carouselLabel,
  previousLabel,
  nextLabel,
  seeAllHref,
  seeAllLabel,
  spacingTop = "section",
  spacingBottom = "section",
  children,
}: CarouselSectionProps) {
  const titleId = `${id}-title`;

  return (
    <Reveal
      labelledBy={titleId}
      className={cn(SPACING_TOP[spacingTop], SPACING_BOTTOM[spacingBottom])}
    >
      <div className="container-content">
        <RevealItem className="text-center">
          <h2
            id={titleId}
            className="font-display text-section font-medium text-rose"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-lead text-balance text-muted-foreground">
            {intro}
          </p>
        </RevealItem>

        <div className="mt-8 md:mt-12">
          <CardCarousel
            label={carouselLabel}
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            footer={
              <Link href={seeAllHref} className={buttonVariants({ size: "sm" })}>
                {seeAllLabel}
                <ArrowIcon className="size-4 md:size-5" />
              </Link>
            }
          >
            {children}
          </CardCarousel>
        </div>
      </div>
    </Reveal>
  );
}
