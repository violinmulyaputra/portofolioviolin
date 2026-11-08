import { getLocale, getTranslations } from "next-intl/server";

import {
  CarouselSection,
  type SectionSpacingBottom,
  type SectionSpacingTop,
} from "@/components/sections/CarouselSection";
import { CertificateCard } from "@/components/sections/CertificateCard";
import { CARD_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { getResolvedCertificates } from "@/lib/resolved-certificates";

type CertificatesSectionProps = {
  spacingTop?: SectionSpacingTop;
  spacingBottom?: SectionSpacingBottom;
};

export async function CertificatesSection({
  spacingTop,
  spacingBottom,
}: CertificatesSectionProps) {
  const t = await getTranslations("Certificates");
  const certificates = await getResolvedCertificates(await getLocale());

  return (
    <CarouselSection
      id="certificates"
      title={t("sectionTitle")}
      intro={t("sectionIntro")}
      carouselLabel={t("carouselLabel")}
      previousLabel={t("previous")}
      nextLabel={t("next")}
      seeAllHref="/certificates"
      seeAllLabel={t("seeAll")}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.slug}
          certificate={certificate}
          sizes={CARD_PHOTO_SIZES}
        />
      ))}
    </CarouselSection>
  );
}
