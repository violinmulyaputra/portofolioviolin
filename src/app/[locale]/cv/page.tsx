import type { Metadata } from "next";
import Image from "next/image";
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
    <PageShell
      title={t("title")}
      intro={t("intro")}
      centered
      titleClassName="font-semibold text-rose"
    >
      {/* Actions */}
      <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-center md:gap-4">
        <div className="flex flex-col items-start gap-2">
          <a
            href={cv.href}
            download={cv.downloadName}
            type="application/pdf"
            aria-describedby="cv-file-info"
            className={buttonVariants({ size: "compact" })}
          >
            {t("download")}
            <ArrowIcon className="size-4 rotate-90 md:size-5" />
          </a>
          <p
            id="cv-file-info"
            className="text-caption text-muted-foreground"
          >
            {t("fileInfo", { size: sizeKb })}
          </p>
        </div>
        <a
          href={cv.href}
          target="_blank"
          rel="noopener noreferrer"
          type="application/pdf"
          className={buttonVariants({ variant: "secondary", size: "compact" })}
        >
          {t("openNewTab")}
          <span className="sr-only">{t("openNewTabHint")}</span>
        </a>
      </div>

      {/* Preview mobile */}
      <a
        href={cv.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 block overflow-hidden rounded-card bg-card shadow-soft md:hidden"
      >
        <Image
          src={cv.preview.src}
          width={cv.preview.width}
          height={cv.preview.height}
          alt={t("previewImageAlt")}
          sizes="100vw"
          className="h-auto w-full"
        />
        <span className="sr-only">{t("previewImageHint")}</span>
      </a>

      {/* Preview desktop */}
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
