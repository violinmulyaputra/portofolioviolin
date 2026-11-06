import type { CSSProperties } from "react";

import type { FrameId } from "@/data/frames";
import type { SocialKey } from "@/data/socials";

export type Placement = {
  left: number;
  height: number;
  top?: number;
};

export type DeskPlacement = {
  compact: Placement;
  wide: Placement;
};

export type Illustration = {
  src: string;
  width: number;
  height: number;
};

export type BookKey = "about" | "projects" | "experiences" | "cv" | "contact";

export type BookSpine = {
  centerX: number;
  centerY: number;
  length: number;
  thickness: number;
  rotate: number;
  orientation: "vertical" | "horizontal";
};

export type BookData = {
  key: BookKey;
  href: `/${BookKey}`;
  image: Illustration;
  spine: BookSpine;
  placement: DeskPlacement;
};

// Scene
const COMPACT_SCENE = { width: 1000, height: 360 };
const WIDE_SCENE = { width: 1840, height: 925 };
const COMPACT_SCENE_MAX_PX = 760;
const WIDE_SCENE_MAX_PX = 1136;

export const WALL_CLASS =
  "absolute top-(--tc) left-(--lc) h-(--hc) aspect-(--ratio) xl:top-(--tw) xl:left-(--lw) xl:h-(--hw)";

export const DESK_CLASS =
  "absolute bottom-0 left-(--lc) h-(--hc) aspect-(--ratio) xl:left-(--lw) xl:h-(--hw)";

export function placementStyle(
  placement: DeskPlacement,
  image: Illustration,
): CSSProperties {
  const { compact, wide } = placement;
  return {
    "--lc": `${compact.left}%`,
    "--hc": `${compact.height}%`,
    "--tc": `${compact.top ?? 0}%`,
    "--lw": `${wide.left}%`,
    "--hw": `${wide.height}%`,
    "--tw": `${wide.top ?? 0}%`,
    "--ratio": `${image.width} / ${image.height}`,
  } as CSSProperties;
}

export function placementWidth(
  placement: DeskPlacement,
  image: Illustration,
) {
  const ratio = image.width / image.height;
  return {
    compact:
      (placement.compact.height / 100) *
      (COMPACT_SCENE.height / COMPACT_SCENE.width) *
      ratio,
    wide:
      (placement.wide.height / 100) *
      (WIDE_SCENE.height / WIDE_SCENE.width) *
      ratio,
  };
}

export function placementSizes(
  placement: DeskPlacement,
  image: Illustration,
  fraction = 1,
) {
  const width = placementWidth(placement, image);
  const wide = Math.ceil(width.wide * WIDE_SCENE_MAX_PX * fraction);
  const compact = Math.ceil(width.compact * COMPACT_SCENE_MAX_PX * fraction);
  return `(min-width: 1280px) ${wide}px, ${compact}px`;
}

export function spineFontSize(
  text: string,
  spine: BookSpine,
  height: number,
  image: Illustration,
) {
  const sceneHeight = height;
  const along = sceneHeight * (spine.length / 100);
  const across =
    sceneHeight * (image.width / image.height) * (spine.thickness / 100);
  const [lengthSpace, crossSpace] =
    spine.orientation === "vertical" ? [along, across] : [across, along];
  const byLength = lengthSpace / (Math.max(text.length, 2) * 0.62);
  const byCross = crossSpace * 0.7;
  return Math.min(byLength, byCross);
}

// Illustrations
export const ILLUSTRATIONS = {
  bookAbout: { src: "/illustrations/book-about.webp", width: 563, height: 1080 },
  bookProjects: { src: "/illustrations/book-projects.webp", width: 268, height: 1080 },
  bookExperiences: { src: "/illustrations/book-experiences.webp", width: 223, height: 1080 },
  bookCv: { src: "/illustrations/book-cv.webp", width: 549, height: 1080 },
  bookContact: { src: "/illustrations/book-contact.webp", width: 311, height: 1080 },
  lampOff: { src: "/illustrations/lamp-off.webp", width: 730, height: 1080 },
  lampOn: { src: "/illustrations/lamp-on.webp", width: 730, height: 1080 },
  laptop: { src: "/illustrations/laptop.webp", width: 1450, height: 1080 },
  mug: { src: "/illustrations/mug.webp", width: 1608, height: 1080 },
  plant: { src: "/illustrations/plant.webp", width: 680, height: 1080 },
  stationery: { src: "/illustrations/stationery.webp", width: 574, height: 1080 },
  stickyGithub: { src: "/illustrations/sticky-github.webp", width: 983, height: 1080 },
  stickyInstagram: { src: "/illustrations/sticky-instagram.webp", width: 979, height: 1080 },
  stickyLinkedin: { src: "/illustrations/sticky-linkedin.webp", width: 981, height: 1080 },
} as const satisfies Record<string, Illustration>;

// Books
export const BOOKS: readonly BookData[] = [
  {
    key: "about",
    href: "/about",
    image: ILLUSTRATIONS.bookAbout,
    spine: { centerX: 49.3, centerY: 52.4, length: 61.8, thickness: 34.4, rotate: 17, orientation: "vertical" },
    placement: { compact: { left: 1, height: 27.09 }, wide: { left: 0.27, height: 14.05 } },
  },
  {
    key: "projects",
    href: "/projects",
    image: ILLUSTRATIONS.bookProjects,
    spine: { centerX: 49.8, centerY: 50.7, length: 59.2, thickness: 66.6, rotate: 0, orientation: "vertical" },
    placement: { compact: { left: 6, height: 46.39 }, wide: { left: 3.91, height: 24.11 } },
  },
  {
    key: "experiences",
    href: "/experiences",
    image: ILLUSTRATIONS.bookExperiences,
    spine: { centerX: 49.1, centerY: 51.2, length: 65.3, thickness: 63.3, rotate: 0, orientation: "vertical" },
    placement: { compact: { left: 10, height: 55.42 }, wide: { left: 6.79, height: 28.76 } },
  },
  {
    key: "cv",
    href: "/cv",
    image: ILLUSTRATIONS.bookCv,
    spine: { centerX: 49.9, centerY: 52.3, length: 50.8, thickness: 70.6, rotate: 0, orientation: "horizontal" },
    placement: { compact: { left: 13.9, height: 29.44 }, wide: { left: 9.62, height: 15.24 } },
  },
  {
    key: "contact",
    href: "/contact",
    image: ILLUSTRATIONS.bookContact,
    spine: { centerX: 49.1, centerY: 56.1, length: 78.9, thickness: 67.5, rotate: 0, orientation: "vertical" },
    placement: { compact: { left: 19.2, height: 39.59 }, wide: { left: 13.48, height: 20.54 } },
  },
];

// Frames
export const FRAME_WALL = {
  left: 60.04,
  top: 3.24,
  width: 34.47,
  height: 57.86,
  ratio: 1.185,
  widePx: 392,
  compactMaxPx: 300,
  mobileMaxPx: 215,
  mobileRatio: 100 / 169,
};

export const FRAME_CLASS =
  "absolute top-(--ftm) left-(--flm) h-(--fhm) aspect-(--ratio) md:top-(--ft) md:left-(--fl) md:h-(--fh)";

export const FRAME_POSITIONS_MOBILE: Record<FrameId, Placement> = {
  a: { left: 0, top: 34.32, height: 30.77 },
  b: { left: 48, top: 0, height: 30.77 },
  c: { left: 26, top: 68.64, height: 31.18 },
};

export const FRAME_POSITIONS: Record<FrameId, Placement> = {
  a: { left: 0, top: 36.62, height: 43.73 },
  b: { left: 46.24, top: 0, height: 44.85 },
  c: { left: 45.78, top: 54.18, height: 45.78 },
};

export function frameWallStyle(): CSSProperties {
  return {
    "--wall-left": `${FRAME_WALL.left}%`,
    "--wall-top": `${FRAME_WALL.top}%`,
    "--wall-width": `${FRAME_WALL.width}%`,
    "--wall-height": `${FRAME_WALL.height}%`,
  } as CSSProperties;
}

export function frameStyle(
  position: Placement,
  mobile: Placement,
  image: Illustration,
) {
  return {
    "--fl": `${position.left}%`,
    "--ft": `${position.top ?? 0}%`,
    "--fh": `${position.height}%`,
    "--flm": `${mobile.left}%`,
    "--ftm": `${mobile.top ?? 0}%`,
    "--fhm": `${mobile.height}%`,
    "--ratio": `${image.width} / ${image.height}`,
  } as CSSProperties;
}

export function frameSizes(
  position: Placement,
  mobile: Placement,
  image: Illustration,
  fraction = 1,
) {
  const ratio = image.width / image.height;
  const share = ((position.height / 100) / FRAME_WALL.ratio) * ratio * fraction;
  const mobileShare =
    ((mobile.height / 100) / FRAME_WALL.mobileRatio) * ratio * fraction;
  const wide = Math.ceil(share * FRAME_WALL.widePx);
  const compact = Math.ceil(share * FRAME_WALL.compactMaxPx);
  const small = Math.ceil(mobileShare * FRAME_WALL.mobileMaxPx);
  return `(min-width: 1280px) ${wide}px, (min-width: 768px) ${compact}px, ${small}px`;
}

// Sticky notes
export const STICKY_NOTES: readonly {
  key: SocialKey;
  image: Illustration;
  placement: DeskPlacement;
}[] = [
  {
    key: "instagram",
    image: ILLUSTRATIONS.stickyInstagram,
    placement: { compact: { left: 50, top: 11.11, height: 18.06 }, wide: { left: 45.49, top: 69.41, height: 9.3 } },
  },
  {
    key: "github",
    image: ILLUSTRATIONS.stickyGithub,
    placement: { compact: { left: 57.5, top: 1.94, height: 18.06 }, wide: { left: 52.17, top: 66.16, height: 9.73 } },
  },
  {
    key: "linkedin",
    image: ILLUSTRATIONS.stickyLinkedin,
    placement: { compact: { left: 53.5, top: 33.06, height: 18.06 }, wide: { left: 50.43, top: 79.46, height: 9.4 } },
  },
];

// Lamp and decorations
export const LAMP_PLACEMENT: DeskPlacement = {
  compact: { left: 82, height: 55.28 },
  wide: { left: 88.32, height: 28.65 },
};

export const DECORATIONS: readonly {
  key: string;
  image: Illustration;
  placement: DeskPlacement;
}[] = [
  {
    key: "laptop",
    image: ILLUSTRATIONS.laptop,
    placement: { compact: { left: 25.5, height: 47.5 }, wide: { left: 22.01, height: 24.65 } },
  },
  {
    key: "mug",
    image: ILLUSTRATIONS.mug,
    placement: { compact: { left: 49.5, height: 15.42 }, wide: { left: 39.95, height: 8 } },
  },
  {
    key: "stationery",
    image: ILLUSTRATIONS.stationery,
    placement: { compact: { left: 60, height: 32.78 }, wide: { left: 64.13, height: 16.97 } },
  },
  {
    key: "plant",
    image: ILLUSTRATIONS.plant,
    placement: { compact: { left: 68.5, height: 50.42 }, wide: { left: 77.45, height: 26.16 } },
  },
];
