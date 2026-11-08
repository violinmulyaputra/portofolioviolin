import { useTranslations } from "next-intl";

import { EntryDialog, entryActionClass } from "@/components/sections/EntryDialog";
import type { ResolvedCertificate } from "@/data/certificates";

type CertificateDialogProps = {
  certificate: ResolvedCertificate;
};

export function CertificateDialog({ certificate }: CertificateDialogProps) {
  const t = useTranslations("Certificates");
  const { title } = certificate;

  return (
    <EntryDialog
      roleId={`certificate-${certificate.slug}-role`}
      title={title}
      summary={certificate.summary}
      technologies={certificate.technologies}
      role={certificate.role}
      photos={certificate.photos}
      labels={{
        seeDetails: t("seeDetails"),
        seeDetailsFor: t("seeDetailsFor", { title }),
        close: t("close"),
        photos: t("photos", { title }),
        technologies: t("technologies"),
        role: t("role"),
      }}
      actions={
        certificate.pdfHref && (
          <a
            href={certificate.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            aria-label={t("viewCertificateFor", { title })}
            className={entryActionClass("secondary")}
          >
            {t("viewCertificate")}
          </a>
        )
      }
    />
  );
}
