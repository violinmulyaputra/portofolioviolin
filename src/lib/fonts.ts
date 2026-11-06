import { Fredoka, Gaegu, Plus_Jakarta_Sans } from "next/font/google";

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fredoka",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gaegu",
  display: "swap",
});

export const FONT_VARIABLES = [
  fredoka.variable,
  plusJakartaSans.variable,
  gaegu.variable,
].join(" ");
