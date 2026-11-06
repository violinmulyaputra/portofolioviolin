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
