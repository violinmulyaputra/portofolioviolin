import type { Locale } from "next-intl";

type CvFile = {
  href: string;
  downloadName: string;
};

export const CV_FILES: Record<Locale, CvFile> = {
  en: {
    href: "/cv/cv-en.pdf",
    downloadName: "CV-Violin-Mulya-Putra-EN.pdf",
  },
  id: {
    href: "/cv/cv-id.pdf",
    downloadName: "CV-Violin-Mulya-Putra-ID.pdf",
  },
};
