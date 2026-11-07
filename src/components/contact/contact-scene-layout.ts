import type { CSSProperties } from "react";

export type SceneImage = {
  src: string;
  width: number;
  height: number;
};

export type Anchor = {
  centerX: number;
  span: number;
  bottom: number;
};

export type SceneObject = {
  image: SceneImage;
  x: number;
  y: number;
  height: number;
};

export type Overlay = {
  image: SceneImage;
  left: number;
  top: number;
  width: number;
  height: number;
};

const SCENE_MOBILE_MAX_PX = 250;
const SCENE_DESKTOP_MAX_PX = 288;

// Images
export const CONTACT_IMAGES = {
  lampOff: { src: "/illustrations/contact-lamp-off.webp", width: 357, height: 1080 },
  lampOn: { src: "/illustrations/contact-lamp-on.webp", width: 773, height: 1080 },
  table: { src: "/illustrations/contact-table.webp", width: 909, height: 1080 },
  plant: { src: "/illustrations/contact-plant.webp", width: 658, height: 1080 },
  phoneDown: { src: "/illustrations/contact-phone-down.webp", width: 1196, height: 1080 },
  phoneUp: { src: "/illustrations/contact-phone-up.webp", width: 1089, height: 1080 },
} as const satisfies Record<string, SceneImage>;

// Canvas alignment
function overlayFrom(
  base: SceneImage,
  baseAnchor: Anchor,
  image: SceneImage,
  anchor: Anchor,
): Overlay {
  const scale = baseAnchor.span / anchor.span;
  const left = baseAnchor.centerX - anchor.centerX * scale;
  const top = baseAnchor.bottom - anchor.bottom * scale;
  return {
    image,
    left: (left / base.width) * 100,
    top: (top / base.height) * 100,
    width: ((image.width * scale) / base.width) * 100,
    height: ((image.height * scale) / base.height) * 100,
  };
}

// Scene
const SCENE = { width: 500, height: 520 };

const LAMP_X = 16;
const LAMP_HEIGHT = 520;
const PLANT_X = 118;
const PLANT_HEIGHT = 300;
const TABLE_X = 272;
const TABLE_HEIGHT = 270;
const TABLE_SURFACE_ROW = 125;
const PHONE_WIDTH = 170;
const PHONE_FEET_CENTER_X = 557.5;

function widthFor(image: SceneImage, height: number) {
  return (height * image.width) / image.height;
}

const tableCenter =
  TABLE_X + widthFor(CONTACT_IMAGES.table, TABLE_HEIGHT) / 2;
const phoneHeight =
  (PHONE_WIDTH * CONTACT_IMAGES.phoneDown.height) /
  CONTACT_IMAGES.phoneDown.width;

export const CONTACT_SCENE = {
  lamp: {
    image: CONTACT_IMAGES.lampOff,
    x: LAMP_X,
    y: 0,
    height: LAMP_HEIGHT,
  },
  plant: {
    image: CONTACT_IMAGES.plant,
    x: PLANT_X,
    y: 0,
    height: PLANT_HEIGHT,
  },
  table: {
    image: CONTACT_IMAGES.table,
    x: TABLE_X,
    y: 0,
    height: TABLE_HEIGHT,
  },
  phone: {
    image: CONTACT_IMAGES.phoneDown,
    x:
      tableCenter -
      (PHONE_FEET_CENTER_X / CONTACT_IMAGES.phoneDown.width) * PHONE_WIDTH,
    y:
      TABLE_HEIGHT -
      (TABLE_SURFACE_ROW / CONTACT_IMAGES.table.height) * TABLE_HEIGHT,
    height: phoneHeight,
  },
  overlay: {
    lampOn: overlayFrom(
      CONTACT_IMAGES.lampOff,
      { centerX: 178, span: 204, bottom: 1078 },
      CONTACT_IMAGES.lampOn,
      { centerX: 378, span: 204, bottom: 1078 },
    ),
    phoneUp: overlayFrom(
      CONTACT_IMAGES.phoneDown,
      { centerX: 557.5, span: 951, bottom: 1078 },
      CONTACT_IMAGES.phoneUp,
      { centerX: 521.5, span: 735, bottom: 1078 },
    ),
  },
} as const satisfies {
  lamp: SceneObject;
  plant: SceneObject;
  table: SceneObject;
  phone: SceneObject;
  overlay: Record<string, Overlay>;
};

// Styles
export function sceneStyle(): CSSProperties {
  return { "--scene-ratio": `${SCENE.width} / ${SCENE.height}` } as CSSProperties;
}

function objectWidth(object: SceneObject) {
  return widthFor(object.image, object.height);
}

export function objectStyle(object: SceneObject): CSSProperties {
  return {
    "--x": `${(object.x / SCENE.width) * 100}%`,
    "--y": `${(object.y / SCENE.height) * 100}%`,
    "--w": `${(objectWidth(object) / SCENE.width) * 100}%`,
    "--h": `${(object.height / SCENE.height) * 100}%`,
  } as CSSProperties;
}

export function overlayStyle(overlay: Overlay): CSSProperties {
  return {
    "--ox": `${overlay.left}%`,
    "--oy": `${overlay.top}%`,
    "--ow": `${overlay.width}%`,
    "--oh": `${overlay.height}%`,
  } as CSSProperties;
}

export function objectSizes(object: SceneObject, widthPercent = 100) {
  const fraction = (objectWidth(object) / SCENE.width) * (widthPercent / 100);
  const mobile = Math.ceil(fraction * SCENE_MOBILE_MAX_PX);
  const desktop = Math.ceil(fraction * SCENE_DESKTOP_MAX_PX);
  return `(min-width: 768px) ${desktop}px, ${mobile}px`;
}
