import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ExperiencesPage");
  return { title: t("title") };
}

export default function ExperiencesPage() {
  const t = useTranslations("ExperiencesPage");
  return <PageShell title={t("title")} />;
}
