import { useTranslations } from "next-intl";

import { ContactIcon } from "@/components/contact/ContactIcon";
import { CONTACT_LINKS, type ContactKey } from "@/data/socials";
import { cn } from "@/lib/utils";

const TONES: Record<ContactKey, string> = {
  linkedin: "bg-social-linkedin text-social-linkedin-ink",
  github: "bg-social-github text-social-github-ink",
  email: "bg-social-email text-social-email-ink",
  instagram: "bg-social-instagram text-social-instagram-ink",
  whatsapp: "bg-social-whatsapp text-social-whatsapp-ink",
};

type ContactListProps = {
  className?: string;
};

export function ContactList({ className }: ContactListProps) {
  const t = useTranslations("ContactPage");

  return (
    <ul
      aria-label={t("listLabel")}
      className={cn("flex min-w-0 flex-col gap-2 text-left md:gap-3", className)}
    >
      {CONTACT_LINKS.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            aria-label={t(`links.${link.key}`, { handle: link.handle })}
            {...(link.newTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex min-h-11 items-center gap-3 rounded-pill pr-4 md:gap-4"
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-pill md:size-14",
                TONES[link.key],
              )}
            >
              <ContactIcon name={link.key} className="size-5.5 md:size-7" />
            </span>
            <span className="nav-hover-group-text min-w-0 text-contact font-bold wrap-anywhere text-foreground md:text-contact-desktop">
              {link.handle}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
