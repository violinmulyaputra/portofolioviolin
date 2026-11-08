import { useTranslations } from "next-intl";

import { DetailDialog } from "@/components/sections/DetailDialog";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { DIALOG_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { buttonVariants } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ResolvedCertificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

const ACTION_WRAP_CLASS = "h-auto min-h-10 max-w-full py-2 text-center whitespace-normal";

type CertificateDialogProps = {
  certificate: ResolvedCertificate;
};

export function CertificateDialog({ certificate }: CertificateDialogProps) {
  const t = useTranslations("Certificates");
  const roleId = `certificate-${certificate.slug}-role`;

  return (
    <DetailDialog
      triggerLabel={t("seeDetails")}
      triggerAriaLabel={t("seeDetailsFor", { title: certificate.title })}
      closeLabel={t("close")}
    >
      <PhotoCarousel
        photos={certificate.photos}
        label={t("photos", { title: certificate.title })}
        sizes={DIALOG_PHOTO_SIZES}
        variant="dialog"
      />
      <DialogTitle className="mt-6 text-2xl leading-tight md:text-3xl">
        {certificate.title}
      </DialogTitle>
      {certificate.technologies.length > 0 && (
        <ul aria-label={t("technologies")} className="mt-3 flex flex-wrap gap-2">
          {certificate.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-pill bg-blush px-3 text-base text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      )}
      <DialogDescription className="mt-4">{certificate.summary}</DialogDescription>

      {/* Role */}
      <section aria-labelledby={roleId} className="mt-6">
        <h3
          id={roleId}
          className="font-display text-xl font-medium text-foreground"
        >
          {t("role")}
        </h3>
        <p className="mt-2 text-base leading-body text-foreground">
          {certificate.role}
        </p>
      </section>

      {/* PDF */}
      {certificate.pdfHref && (
        <div className="mt-6">
          <a
            href={certificate.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            aria-label={t("viewCertificateFor", { title: certificate.title })}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              ACTION_WRAP_CLASS,
            )}
          >
            {t("viewCertificate")}
          </a>
        </div>
      )}
    </DetailDialog>
  );
}
