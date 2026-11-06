import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import "@/app/globals.css";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { routing } from "@/i18n/routing";
import { FONT_VARIABLES } from "@/lib/fonts";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: { default: t("siteName"), template: `%s | ${t("siteName")}` },
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={FONT_VARIABLES}>
      <body className="flex min-h-dvh flex-col">
        <NextIntlClientProvider>
          <LanguageToggle />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
