import { useTranslations } from "next-intl";

import { EMAIL, EMAIL_HREF, SOCIALS } from "@/data/socials";

export function Footer() {
  const t = useTranslations("Footer");
  const tMeta = useTranslations("Metadata");

  return (
    <footer className="border-t-2 border-line bg-sand">
      <div className="container-content flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-2xl font-medium">
            {tMeta("siteName")}
          </p>
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
        </div>
        <nav aria-label={t("socials")}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {SOCIALS.map((social) => (
              <li key={social.key}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-medium underline-hover"
                >
                  {social.label}
                  <span className="sr-only"> ({t("newTab")})</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={EMAIL_HREF}
                className="inline-flex min-h-11 items-center font-medium underline-hover"
              >
                <span className="sr-only">{t("email")}: </span>
                {EMAIL}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
