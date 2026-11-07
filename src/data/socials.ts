export type SocialKey = "github" | "linkedin" | "instagram";

export type Social = {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
};

export const SOCIALS: readonly Social[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "violinmulyaputra",
    href: "https://github.com/violinmulyaputra",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "violin-mulya-putra",
    href: "https://www.linkedin.com/in/violin-mulya-putra/",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "violinmulya",
    href: "https://www.instagram.com/violinmulya/",
  },
];

export const EMAIL = "violinmulya@gmail.com";

export const EMAIL_HREF = `mailto:${EMAIL}`;

// Phone
export const PHONE = {
  display: "+62 858-9305-7924",
  digits: "6285893057924",
} as const;

export const WHATSAPP_HREF = `https://wa.me/${PHONE.digits}`;

// Contact page
export type ContactKey = SocialKey | "email" | "whatsapp";

export type ContactLink = {
  key: ContactKey;
  handle: string;
  href: string;
  newTab: boolean;
};

function socialLink(key: SocialKey): ContactLink {
  const social = SOCIALS.find((item) => item.key === key);
  if (!social) throw new Error(`Missing social: ${key}`);
  return { key, handle: social.handle, href: social.href, newTab: true };
}

export const CONTACT_LINKS: readonly ContactLink[] = [
  socialLink("linkedin"),
  socialLink("github"),
  { key: "email", handle: EMAIL, href: EMAIL_HREF, newTab: false },
  socialLink("instagram"),
  {
    key: "whatsapp",
    handle: PHONE.display,
    href: WHATSAPP_HREF,
    newTab: false,
  },
];
