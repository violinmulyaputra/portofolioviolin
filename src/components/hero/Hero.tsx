import { useTranslations } from "next-intl";

import { Desk } from "@/components/hero/Desk";
import { FrameWall } from "@/components/hero/FrameWall";
import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <div className="container-content">
        <div className="hero-layout pt-4 md:pt-6 xl:pt-0">
          <h1
            id="hero-title"
            className="area-title contain-inline relative z-10 flex flex-col gap-1 md:gap-2 xl:max-w-hero-text xl:pt-6"
          >
            <span className="font-hand text-lg font-bold text-matcha md:text-greeting">
              {t("greeting")}
            </span>
            <span className="font-display text-display-mobile font-semibold whitespace-nowrap text-rose md:text-display">
              {t("name")}
            </span>
          </h1>

          <div className="area-text relative z-10 mt-3 flex min-w-0 flex-col items-start gap-3 md:mt-4 md:gap-6 xl:max-w-hero-text xl:gap-8">
            <p className="max-w-xl text-lead-mobile text-muted-foreground md:text-lead">
              {t("tagline")}
            </p>
            <Link href="/about" className={buttonVariants({ size: "hero" })}>
              {t("cta")}
              <ArrowIcon className="size-3.5 md:size-5" />
            </Link>
          </div>

          <div
            role="group"
            aria-label={t("desk")}
            className="area-desk contain-inline -mx-gutter mt-6 snap-x snap-proximity overflow-x-auto overflow-y-hidden md:-mx-gutter-desktop xl:absolute xl:inset-0 xl:m-0 xl:snap-none xl:overflow-visible"
          >
            <div className="w-full min-w-desk xl:h-full">
              <Desk />
              <div
                aria-hidden="true"
                className="h-8 bg-blush xl:hidden"
              />
            </div>
          </div>

          <FrameWall className="area-wall z-10" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hidden h-8 bg-blush xl:block"
      />
    </section>
  );
}
