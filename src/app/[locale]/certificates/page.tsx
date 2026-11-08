import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/sections/CardGrid";
import { CertificateCard } from "@/components/sections/CertificateCard";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { getResolvedCertificates } from "@/lib/resolved-certificates";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("CertificatesPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default async function CertificatesPage() {
  const t = await getTranslations("CertificatesPage");
  const certificates = await getResolvedCertificates(await getLocale());

  return (
    <PageShell title={t("title")} intro={t("intro")}>
      <CardGrid>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.slug}
            certificate={certificate}
            headingLevel="h2"
            sizes={CARD_PHOTO_SIZES}
            aboveFold={index === 0}
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
