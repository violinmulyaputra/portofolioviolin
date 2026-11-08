import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectsPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  return <PageShell title={t("title")} intro={t("empty")} />;
}
