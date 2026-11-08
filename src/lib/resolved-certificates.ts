import type { Locale } from "next-intl";

import {
  CERTIFICATES,
  resolveCertificate,
  type ResolvedCertificate,
} from "@/data/certificates";
import { getCertificatePdf } from "@/lib/certificate-pdf";
import { getEntryPhotos } from "@/lib/entry-photos";

export async function getResolvedCertificates(
  locale: Locale,
): Promise<ResolvedCertificate[]> {
  return Promise.all(
    CERTIFICATES.map(async (certificate) =>
      resolveCertificate(
        certificate,
        locale,
        await getEntryPhotos(
          "certificates",
          certificate.slug,
          certificate.title[locale],
          locale,
        ),
        getCertificatePdf(certificate.slug),
      ),
    ),
  );
}
