import { useTranslations } from "next-intl";

import { EMAIL, EMAIL_HREF, SOCIALS } from "@/data/socials";

export function Footer() {
  const t = useTranslations("Footer");
  const tMeta = useTranslations("Metadata");

  return (
    <footer className="bg-blush">
      <div className="container-content flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex shrink-0 flex-col">
          <p className="font-display text-2xl leading-tight font-medium">
            {tMeta("siteName")}
          </p>
          <p className="text-foreground">{t("copyright")}</p>
        </div>
        <nav aria-label={t("socials")}>
          <ul className="flex flex-wrap items-center gap-x-4 md:justify-end">
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
