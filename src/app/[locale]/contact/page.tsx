import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage");
  return { title: t("title") };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return <PageShell title={t("title")} />;
}
