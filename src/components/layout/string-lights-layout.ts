import type { CSSProperties } from "react";

export const LIGHTS_IMAGES = {
  off: { src: "/illustrations/lights-off.webp", width: 2167, height: 726 },
  on: { src: "/illustrations/lights-on.webp", width: 2167, height: 726 },
};

export const STRING_LIGHTS = {
  copyWidthPercent: 64,
  maxCopyWidthPx: 1000,
  overlapPercentOfCopy: 36,
  rightDropPercent: 0,
  leftRotateDeg: -1.5,
  rightRotateDeg: 1.5,
  bandTopRow: 80,
  bandBottomRow: 578,
};

const { width: IMAGE_WIDTH, height: IMAGE_HEIGHT } = LIGHTS_IMAGES.off;

export const STRING_LIGHTS_SIZES = `(min-width: ${Math.ceil(
  (STRING_LIGHTS.maxCopyWidthPx * 100) / STRING_LIGHTS.copyWidthPercent,
)}px) ${STRING_LIGHTS.maxCopyWidthPx}px, ${STRING_LIGHTS.copyWidthPercent}vw`;

export function stringLightsVars(): CSSProperties {
  const dropRows = (IMAGE_HEIGHT * STRING_LIGHTS.rightDropPercent) / 100;
  const vars: Record<`--${string}`, string> = {
    "--lights-copy": `min(${STRING_LIGHTS.copyWidthPercent}cqw, ${STRING_LIGHTS.maxCopyWidthPx}px)`,
    "--lights-overlap": `${STRING_LIGHTS.overlapPercentOfCopy / 100}`,
    "--lights-band": `${(STRING_LIGHTS.bandBottomRow - STRING_LIGHTS.bandTopRow) / IMAGE_WIDTH}`,
    "--lights-top": `${-STRING_LIGHTS.bandTopRow / IMAGE_WIDTH}`,
    "--lights-drop": `${dropRows / IMAGE_WIDTH}`,
    "--lights-left-rotate": `${STRING_LIGHTS.leftRotateDeg}deg`,
    "--lights-right-rotate": `${STRING_LIGHTS.rightRotateDeg}deg`,
    "--lights-ratio": `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`,
  };
  return vars;
}
