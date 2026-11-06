import { useTranslations } from "next-intl";

import { PageShell } from "@/components/layout/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <PageShell title={t("title")}>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        {t("back")}
      </Link>
    </PageShell>
  );
}
