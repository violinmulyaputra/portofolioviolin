export type FrameId = "a" | "b" | "c";

export type FrameHole = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type FramePhoto = {
  src: string;
  width: number;
  height: number;
};

export type FrameData = {
  id: FrameId;
  src: string;
  width: number;
  height: number;
  hole: FrameHole;
  photos: readonly [FramePhoto, FramePhoto, FramePhoto];
};

export const FRAME_PHOTO_INTERVAL_MS = 4000;

export const FRAME_HOLES: Record<FrameId, FrameHole> = {
  a: { left: 11.19, top: 11.67, width: 77.89, height: 77.87 },
  b: { left: 11.33, top: 12.5, width: 77.62, height: 77.31 },
  c: { left: 7.38, top: 11.76, width: 85.37, height: 78.98 },
};

export const FRAMES: Record<FrameId, FrameData> = {
  a: {
    id: "a",
    src: "/illustrations/frame-a.webp",
    width: 1081,
    height: 1080,
    hole: FRAME_HOLES.a,
    photos: [
      { src: "/images/frames/frame-a-1.webp", width: 585, height: 585 },
      { src: "/images/frames/frame-a-2.webp", width: 720, height: 720 },
      { src: "/images/frames/frame-a-3.webp", width: 720, height: 720 },
    ],
  },
  b: {
    id: "b",
    src: "/illustrations/frame-b.webp",
    width: 1077,
    height: 1080,
    hole: FRAME_HOLES.b,
    photos: [
      { src: "/images/frames/frame-b-1.webp", width: 960, height: 960 },
      { src: "/images/frames/frame-b-2.webp", width: 1108, height: 1108 },
      { src: "/images/frames/frame-b-3.webp", width: 720, height: 720 },
    ],
  },
  c: {
    id: "c",
    src: "/illustrations/frame-c.webp",
    width: 1517,
    height: 1080,
    hole: FRAME_HOLES.c,
    photos: [
      { src: "/images/frames/frame-c-1.webp", width: 1200, height: 857 },
      { src: "/images/frames/frame-c-2.webp", width: 1008, height: 720 },
      { src: "/images/frames/frame-c-3.webp", width: 1196, height: 854 },
    ],
  },
};
