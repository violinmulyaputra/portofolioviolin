import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { ArrowIcon } from "@/components/layout/ArrowIcon";
import { PageShell } from "@/components/layout/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { CV_FILES } from "@/data/cv";
import { publicFileSizeKb } from "@/lib/file-size";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("CvPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default function CvPage() {
  const t = useTranslations("CvPage");
  const locale = useLocale();
  const cv = CV_FILES[locale];
  const sizeKb = publicFileSizeKb(cv.href);

  return (
    <PageShell title={t("title")} intro={t("intro")}>
      <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
        <a
          href={cv.href}
          download={cv.downloadName}
          type="application/pdf"
          aria-describedby="cv-file-info"
          className={buttonVariants({ size: "hero" })}
        >
          {t("download")}
          <ArrowIcon className="size-3.5 rotate-90 md:size-5" />
        </a>
        <a
          href={cv.href}
          target="_blank"
          rel="noopener noreferrer"
          type="application/pdf"
          className={buttonVariants({ variant: "secondary", size: "hero" })}
        >
          {t("openNewTab")}
          <span className="sr-only">{t("openNewTabHint")}</span>
        </a>
      </div>
      <p id="cv-file-info" className="mt-3 text-base text-muted-foreground">
        {t("fileInfo", { size: sizeKb })}
      </p>

      <div className="mt-12 hidden h-preview overflow-hidden rounded-card bg-card shadow-soft md:block">
        <object
          data={cv.href}
          type="application/pdf"
          title={t("previewTitle")}
          className="size-full"
        >
          <div className="flex size-full flex-col items-center justify-center gap-3 p-8 text-center">
            <p className="text-base text-foreground">{t("previewFallback")}</p>
            <a
              href={cv.href}
              download={cv.downloadName}
              className="font-bold text-berry underline underline-offset-4"
            >
              {t("previewFallbackLink")}
            </a>
          </div>
        </object>
      </div>
    </PageShell>
  );
}
