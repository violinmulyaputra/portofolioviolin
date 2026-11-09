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

type ContactListSize = "default" | "compact";

const SIZES: Record<
  ContactListSize,
  { list: string; row: string; icon: string; glyph: string; text: string }
> = {
  default: {
    list: "gap-2 md:gap-3",
    row: "min-h-11 gap-3 md:gap-4",
    icon: "size-11 md:size-14",
    glyph: "size-5.5 md:size-7",
    text: "text-contact md:text-contact-desktop",
  },
  compact: {
    list: "gap-2 md:gap-1 lg:gap-2",
    row: "min-h-11 gap-3 md:min-h-0",
    icon: "size-11 md:size-8 lg:size-10",
    glyph: "size-5.5 md:size-4 lg:size-5",
    text: "text-contact",
  },
};

type ContactListProps = {
  size?: ContactListSize;
  className?: string;
};

export function ContactList({ size = "default", className }: ContactListProps) {
  const t = useTranslations("ContactPage");
  const sizes = SIZES[size];

  return (
    <ul
      aria-label={t("listLabel")}
      className={cn("flex min-w-0 flex-col text-left", sizes.list, className)}
    >
      {CONTACT_LINKS.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            aria-label={t(`links.${link.key}`, { handle: link.handle })}
            {...(link.newTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={cn("group flex items-center rounded-pill pr-4", sizes.row)}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex shrink-0 items-center justify-center rounded-pill",
                sizes.icon,
                TONES[link.key],
              )}
            >
              <ContactIcon name={link.key} className={sizes.glyph} />
            </span>
            <span
              className={`nav-hover-group-text min-w-0 font-bold wrap-anywhere text-foreground ${sizes.text}`}
            >
              {link.handle}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
