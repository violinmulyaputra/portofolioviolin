import type { Locale } from "next-intl";

export type Localized<T> = Record<Locale, T>;

export type ResolvedPhoto = {
  src: string;
  alt: string;
};
