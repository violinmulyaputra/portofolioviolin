"use client";

import { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type ToggleViewProps = {
  pathname: string;
};

function ToggleView({ pathname }: ToggleViewProps) {
  const t = useTranslations("LanguageToggle");
  const currentLocale = useLocale();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center rounded-pill bg-blush p-1"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "inline-flex h-9 min-w-11 items-center justify-center rounded-pill px-3 text-base font-bold uppercase",
              isActive ? "bg-pink text-pink-foreground" : "text-foreground hover:bg-card",
            )}
          >
            {locale}
            <span className="sr-only">, {t(locale)}</span>
          </Link>
        );
      })}
    </div>
  );
}

function ToggleWithPathname() {
  const pathname = usePathname();
  return <ToggleView pathname={pathname} />;
}

export function LanguageToggle() {
  return (
    <Suspense fallback={<ToggleView pathname="/" />}>
      <ToggleWithPathname />
    </Suspense>
  );
}
