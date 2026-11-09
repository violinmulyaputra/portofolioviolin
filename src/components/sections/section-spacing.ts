export type SectionSpacingTop = "section" | "pair";
export type SectionSpacingBottom = "section" | "pair" | "footer";

export const SPACING_TOP: Record<SectionSpacingTop, string> = {
  section: "pt-section md:pt-section-desktop",
  pair: "pt-4 md:pt-6",
};

export const SPACING_BOTTOM: Record<SectionSpacingBottom, string> = {
  section: "pb-section md:pb-section-desktop",
  pair: "pb-4 md:pb-6",
  footer: "pb-8 md:pb-12",
};
