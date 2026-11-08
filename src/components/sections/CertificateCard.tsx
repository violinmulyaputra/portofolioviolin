import { useTranslations } from "next-intl";

import { CertificateDialog } from "@/components/sections/CertificateDialog";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import type { ResolvedCertificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

type CertificateCardProps = {
  certificate: ResolvedCertificate;
  headingLevel?: "h2" | "h3";
  sizes: string;
  aboveFold?: boolean;
  className?: string;
};

export function CertificateCard({
  certificate,
  headingLevel: Heading = "h3",
  sizes,
  aboveFold = false,
  className,
}: CertificateCardProps) {
  const t = useTranslations("Certificates");
  const titleId = `certificate-${certificate.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "card-lift flex h-full flex-col gap-4 rounded-card bg-card p-4 shadow-soft",
        className,
      )}
    >
      <PhotoCarousel
        photos={certificate.photos}
        label={t("photos", { title: certificate.title })}
        sizes={sizes}
        aboveFold={aboveFold}
      />
      <div className="flex flex-1 flex-col gap-1 px-1">
        <Heading
          id={titleId}
          className="lines-2 line-clamp-2 font-display text-2xl leading-tight font-medium text-foreground"
        >
          {certificate.title}
        </Heading>
        <p className="lines-2 mt-2 line-clamp-2 text-base leading-body text-foreground">
          {certificate.summary}
        </p>
        {certificate.technologies.length > 0 && (
          <p className="relative line-clamp-1 text-base leading-body text-muted-foreground">
            <span className="sr-only">{t("technologies")}: </span>
            {certificate.technologies.join(", ")}
          </p>
        )}
        <div className="mt-auto pt-4">
          <CertificateDialog certificate={certificate} />
        </div>
      </div>
    </article>
  );
}
