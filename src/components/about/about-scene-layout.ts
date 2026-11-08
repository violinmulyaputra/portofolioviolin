import type { CSSProperties } from "react";

export type SceneImage = {
  src: string;
  width: number;
  height: number;
};

export type Rect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type Anchor = {
  centerX: number;
  span: number;
  bottom: number;
};

type Placement = {
  image: SceneImage;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PhotoKey = "portrait" | "family1" | "family2" | "team";

export type SceneItem =
  | (Placement & { kind: "decor"; z: number })
  | (Placement & {
      kind: "frame";
      z: number;
      tilt: number;
      hole: Rect;
      oval: boolean;
      photo: SceneImage;
      photoKey: PhotoKey;
    })
  | (Placement & { kind: "lamp"; z: number; overlay: Rect; hitZones: Rect[] });

export type Scene = {
  width: number;
  height: number;
  items: SceneItem[];
};

export const ABOUT_SCENE_MAX_PX = 440;
const REFERENCE_SCENE_WIDTH = 628;
const PX_PER_UNIT = ABOUT_SCENE_MAX_PX / REFERENCE_SCENE_WIDTH;
const HOLE_BLEED_PERCENT = 1;

// Images
export const ABOUT_IMAGES = {
  plant: { src: "/illustrations/about-plant.webp", width: 481, height: 1080 },
  sofa: { src: "/illustrations/about-sofa.webp", width: 1196, height: 1080 },
  frameWood: { src: "/illustrations/about-frame-wood.webp", width: 1197, height: 1080 },
  table: { src: "/illustrations/about-table.webp", width: 1016, height: 1080 },
  vases: { src: "/illustrations/about-vases.webp", width: 778, height: 1080 },
  frameBlue: { src: "/illustrations/about-frame-blue.webp", width: 888, height: 1080 },
  lampOff: { src: "/illustrations/about-lamp-off.webp", width: 344, height: 1080 },
  lampOn: { src: "/illustrations/about-lamp-on.webp", width: 448, height: 1080 },
  shelf: { src: "/illustrations/about-shelf.webp", width: 1360, height: 1080 },
  frameYellow: { src: "/illustrations/about-frame-yellow.webp", width: 1660, height: 1084 },
} as const satisfies Record<string, SceneImage>;

export const ABOUT_PHOTOS = {
  portrait: { src: "/images/about/portrait.webp", width: 1620, height: 1080 },
  family1: { src: "/images/about/family-1.webp", width: 835, height: 1079 },
  family2: { src: "/images/about/family-2.webp", width: 835, height: 1079 },
  team: { src: "/images/about/team.webp", width: 1754, height: 1080 },
} as const satisfies Record<PhotoKey, SceneImage>;

// Frame holes
export const FRAME_HOLES = {
  wood: { left: 5.6, top: 31.57, width: 87.8, height: 62.59 },
  blue: { left: 15.77, top: 13.98, width: 66.89, height: 71.67 },
  yellow: { left: 8.49, top: 12.55, width: 82.95, height: 74.72 },
} as const satisfies Record<string, Rect>;

export const FRAME_TILT_DEG = {
  wood: -3,
  blueLarge: 3,
  blueSmall: -4,
  yellow: 3,
} as const;

const BOTTOM_GAP_PX = {
  plant: 2,
  shelf: 6,
} as const;

// Placement helpers
function byHeight(image: SceneImage, x: number, y: number, height: number): Placement {
  return { image, x, y, height, width: (height * image.width) / image.height };
}

function byWidth(image: SceneImage, x: number, y: number, width: number): Placement {
  return { image, x, y, width, height: (width * image.height) / image.width };
}

function onFloor(image: SceneImage, x: number, height: number, gapPx = 0): Placement {
  return byHeight(image, x, -(gapPx / image.height) * height, height);
}

function naturalWidthCap(image: SceneImage, width: number) {
  return Math.min(width, image.width / PX_PER_UNIT);
}

function overlayFrom(base: SceneImage, baseAnchor: Anchor, image: SceneImage, anchor: Anchor): Rect {
  const scale = baseAnchor.span / anchor.span;
  const left = baseAnchor.centerX - anchor.centerX * scale;
  const top = baseAnchor.bottom - anchor.bottom * scale;
  return {
    left: (left / base.width) * 100,
    top: (top / base.height) * 100,
    width: ((image.width * scale) / base.width) * 100,
    height: ((image.height * scale) / base.height) * 100,
  };
}

function pixelRect(image: SceneImage, x0: number, y0: number, x1: number, y1: number): Rect {
  return {
    left: (x0 / image.width) * 100,
    top: (y0 / image.height) * 100,
    width: ((x1 - x0) / image.width) * 100,
    height: ((y1 - y0) / image.height) * 100,
  };
}

// Scene 1
const WOOD_FRAME_WIDTH = 257;

// Scene 2
const BLUE_FRAME_LARGE_WIDTH = naturalWidthCap(ABOUT_IMAGES.frameBlue, 172);
const BLUE_FRAME_SMALL_RATIO = 0.8;
const BLUE_FRAME_LARGE_X = 137;
const BLUE_FRAME_LARGE_Y = 512;
const BLUE_FRAME_SMALL_X = 0;
const BLUE_FRAME_SMALL_Y = 428;

// Scene 3
const YELLOW_FRAME_WIDTH = 299;
const LAMP_HEIGHT = 712;

const { lampOff, lampOn } = ABOUT_IMAGES;

const LAMP_HIT_ZONES: Rect[] = [
  pixelRect(lampOff, 140, 8, 336, 150),
  pixelRect(lampOff, 70, 110, 200, 185),
  pixelRect(lampOff, 56, 170, 118, 1010),
  pixelRect(lampOff, 0, 1005, 178, 1080),
];

export const ABOUT_SCENES = {
  intro: {
    width: REFERENCE_SCENE_WIDTH,
    height: 644,
    items: [
      { kind: "decor", z: 10, ...onFloor(ABOUT_IMAGES.plant, 0, 612, BOTTOM_GAP_PX.plant) },
      { kind: "decor", z: 20, ...onFloor(ABOUT_IMAGES.sofa, 214, 374) },
      {
        kind: "frame",
        z: 30,
        ...byWidth(ABOUT_IMAGES.frameWood, 297, 412, WOOD_FRAME_WIDTH),
        tilt: FRAME_TILT_DEG.wood,
        hole: FRAME_HOLES.wood,
        oval: false,
        photo: ABOUT_PHOTOS.portrait,
        photoKey: "portrait",
      },
    ],
  },
  roots: {
    width: 309,
    height: 721,
    items: [
      { kind: "decor", z: 10, ...onFloor(ABOUT_IMAGES.table, 19, 293) },
      { kind: "decor", z: 20, ...byHeight(ABOUT_IMAGES.vases, 90, 278, 192) },
      {
        kind: "frame",
        z: 30,
        ...byWidth(ABOUT_IMAGES.frameBlue, BLUE_FRAME_LARGE_X, BLUE_FRAME_LARGE_Y, BLUE_FRAME_LARGE_WIDTH),
        tilt: FRAME_TILT_DEG.blueLarge,
        hole: FRAME_HOLES.blue,
        oval: true,
        photo: ABOUT_PHOTOS.family2,
        photoKey: "family2",
      },
      {
        kind: "frame",
        z: 30,
        ...byWidth(
          ABOUT_IMAGES.frameBlue,
          BLUE_FRAME_SMALL_X,
          BLUE_FRAME_SMALL_Y,
          BLUE_FRAME_LARGE_WIDTH * BLUE_FRAME_SMALL_RATIO,
        ),
        tilt: FRAME_TILT_DEG.blueSmall,
        hole: FRAME_HOLES.blue,
        oval: true,
        photo: ABOUT_PHOTOS.family1,
        photoKey: "family1",
      },
    ],
  },
  growth: {
    width: 451,
    height: LAMP_HEIGHT,
    items: [
      {
        kind: "lamp",
        z: 10,
        ...onFloor(lampOff, 0, LAMP_HEIGHT),
        overlay: overlayFrom(
          lampOff,
          { centerX: 89, span: 164, bottom: 1079 },
          lampOn,
          { centerX: 88, span: 166, bottom: 1075 },
        ),
        hitZones: LAMP_HIT_ZONES,
      },
      { kind: "decor", z: 20, ...onFloor(ABOUT_IMAGES.shelf, 100, 279, BOTTOM_GAP_PX.shelf) },
      {
        kind: "frame",
        z: 30,
        ...byWidth(ABOUT_IMAGES.frameYellow, 133, 341, YELLOW_FRAME_WIDTH),
        tilt: FRAME_TILT_DEG.yellow,
        hole: FRAME_HOLES.yellow,
        oval: false,
        photo: ABOUT_PHOTOS.team,
        photoKey: "team",
      },
    ],
  },
} as const satisfies Record<string, Scene>;

export type SceneKey = keyof typeof ABOUT_SCENES;

// Styles
export function sceneStyle(scene: Scene): CSSProperties {
  return {
    "--scene-units": scene.width,
    "--scene-ratio": `${scene.width} / ${scene.height}`,
    "--scene-max": `${scene.width * PX_PER_UNIT}px`,
    "--scene-share": `${(scene.width / REFERENCE_SCENE_WIDTH) * 100}%`,
  } as CSSProperties;
}

export function itemStyle(scene: Scene, item: Placement): CSSProperties {
  return {
    "--x": `${(item.x / scene.width) * 100}%`,
    "--y": `${(item.y / scene.height) * 100}%`,
    "--w": `${(item.width / scene.width) * 100}%`,
    "--h": `${(item.height / scene.height) * 100}%`,
  } as CSSProperties;
}

export function rectStyle(rect: Rect, bleed = 0): CSSProperties {
  return {
    "--ox": `${rect.left - bleed}%`,
    "--oy": `${rect.top - bleed}%`,
    "--ow": `${rect.width + bleed * 2}%`,
    "--oh": `${rect.height + bleed * 2}%`,
  } as CSSProperties;
}

export function holeStyle(hole: Rect) {
  return rectStyle(hole, HOLE_BLEED_PERCENT);
}

export function itemSizes(item: Placement, widthPercent = 100) {
  return `${Math.ceil(item.width * PX_PER_UNIT * (widthPercent / 100))}px`;
}
