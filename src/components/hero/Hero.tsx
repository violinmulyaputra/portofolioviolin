import { useTranslations } from "next-intl";

import { Desk } from "@/components/hero/Desk";
import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <div className="container-content">
        <div className="xl:relative xl:aspect-desk">
          <div className="relative z-10 flex flex-col items-start gap-6 pt-12 xl:max-w-hero-text xl:pt-16">
            <h1 id="hero-title" className="flex flex-col gap-2">
              <span className="font-hand text-3xl font-bold text-muted-foreground md:text-4xl">
                {t("greeting")}
              </span>
              <span className="font-display text-display font-semibold">
                {t("name")}
              </span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              {t("tagline")}
            </p>
            <Link href="/about" className={buttonVariants()}>
              {t("cta")}
              <ArrowIcon />
            </Link>
          </div>

          <div
            role="group"
            aria-label={t("desk")}
            className="-mx-gutter mt-8 snap-x snap-proximity overflow-x-auto overflow-y-hidden md:-mx-gutter-desktop xl:absolute xl:inset-0 xl:m-0 xl:snap-none xl:overflow-visible"
          >
            <div className="w-full min-w-desk xl:h-full">
              <Desk />
              <div
                aria-hidden="true"
                className="h-8 border-t-2 border-line bg-sand xl:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hidden h-8 border-t-2 border-line bg-sand xl:block"
      />
    </section>
  );
}
