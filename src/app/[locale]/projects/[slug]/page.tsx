import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectDetailPage");
  return { title: t("title") };
}

export default function ProjectDetailPage() {
  const t = useTranslations("ProjectDetailPage");
  return <PageShell title={t("title")} />;
}
