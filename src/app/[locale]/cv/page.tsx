import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("CvPage");
  return { title: t("title") };
}

export default function CvPage() {
  const t = useTranslations("CvPage");
  return <PageShell title={t("title")} />;
}
