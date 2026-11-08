import { useTranslations } from "next-intl";

import { PageShell } from "@/components/layout/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <PageShell title={t("title")}>
      <div className="mt-8 flex justify-center">
        <Link href="/" className={buttonVariants()}>
          {t("back")}
        </Link>
      </div>
    </PageShell>
  );
}
