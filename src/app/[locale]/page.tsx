import { useTranslations } from "next-intl";

import { PageShell } from "@/components/layout/PageShell";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return <PageShell title={t("title")} />;
}
