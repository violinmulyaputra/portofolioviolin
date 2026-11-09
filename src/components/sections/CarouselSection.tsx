import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { CardCarousel } from "@/components/sections/CardCarousel";
import {
  SPACING_BOTTOM,
  SPACING_TOP,
  type SectionSpacingBottom,
  type SectionSpacingTop,
} from "@/components/sections/section-spacing";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type {
  SectionSpacingBottom,
  SectionSpacingTop,
} from "@/components/sections/section-spacing";

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
          <SectionHeading id={titleId}>{title}</SectionHeading>
          <p className="mx-auto mt-4 max-w-4xl text-lead text-balance text-muted-foreground">
            {intro}
          </p>
        </RevealItem>

        <Reveal as="div" className="mt-8 md:mt-12">
          <RevealItem>
            <CardCarousel
              label={carouselLabel}
              previousLabel={previousLabel}
              nextLabel={nextLabel}
              footer={
                <Link
                  href={seeAllHref}
                  className={buttonVariants({ size: "card" })}
                >
                  {seeAllLabel}
                  <ArrowIcon className="size-4 md:size-5" />
                </Link>
              }
            >
              {children}
            </CardCarousel>
          </RevealItem>
        </Reveal>
      </div>
    </Reveal>
  );
}
