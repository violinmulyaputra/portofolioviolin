import { useTranslations } from "next-intl";

import { CertificateDialog } from "@/components/sections/CertificateDialog";
import { EntryCard } from "@/components/sections/EntryCard";
import type { ResolvedCertificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: ResolvedCertificate;
  headingLevel?: "h2" | "h3";
  sizes: string;
  aboveFold?: boolean;
  className?: string;
};

export function CertificateCard({ certificate, ...props }: CertificateCardProps) {
  const t = useTranslations("Certificates");

  return (
    <EntryCard
      titleId={`certificate-${certificate.slug}-title`}
      title={certificate.title}
      summary={certificate.summary}
      technologies={certificate.technologies}
      technologiesLabel={t("technologies")}
      photos={certificate.photos}
      photosLabel={t("photos", { title: certificate.title })}
      action={<CertificateDialog certificate={certificate} />}
      {...props}
    />
  );
}
