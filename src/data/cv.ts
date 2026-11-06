import type { Locale } from "next-intl";

type CvFile = {
  href: string;
  downloadName: string;
  preview: {
    src: string;
    width: number;
    height: number;
  };
};

const PREVIEW_SIZE = { width: 800, height: 1132 };

export const CV_FILES: Record<Locale, CvFile> = {
  en: {
    href: "/cv/cv-en.pdf",
    downloadName: "CV-Violin-Mulya-Putra-EN.pdf",
    preview: { src: "/cv/cv-en-preview.webp", ...PREVIEW_SIZE },
  },
  id: {
    href: "/cv/cv-id.pdf",
    downloadName: "CV-Violin-Mulya-Putra-ID.pdf",
    preview: { src: "/cv/cv-id-preview.webp", ...PREVIEW_SIZE },
  },
};
