"use client";

import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  FRAME_CLASS,
  FRAME_POSITIONS,
  FRAME_POSITIONS_MOBILE,
  frameSizes,
  frameStyle,
} from "@/components/hero/desk-layout";
import { CROSSFADE } from "@/lib/motion";
import { FRAME_PHOTO_INTERVAL_MS, type FrameData } from "@/data/frames";
import { cn } from "@/lib/utils";

const PHOTO_BLEED = 1;

const PHOTO_KEYS = ["1", "2", "3"] as const;

const REAL_HOVER_QUERY = "(hover: hover) and (pointer: fine)";

type FrameProps = {
  frame: FrameData;
};

function canHover(event: PointerEvent<HTMLButtonElement>) {
  return (
    event.pointerType === "mouse" && window.matchMedia(REAL_HOVER_QUERY).matches
  );
}

export function Frame({ frame }: FrameProps) {
  const t = useTranslations("Hero.frames");
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const captionId = useId();

  const isPaused =
    isHovered ||
    isKeyboardFocused ||
    isPausedByUser ||
    prefersReducedMotion === true;
  const position = FRAME_POSITIONS[frame.id];
  const mobilePosition = FRAME_POSITIONS_MOBILE[frame.id];
  const image = { src: frame.src, width: frame.width, height: frame.height };
  const { hole } = frame;

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % frame.photos.length);
    }, FRAME_PHOTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, frame.photos.length]);

  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (canHover(event)) setIsHovered(true);
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    setIsKeyboardFocused(event.currentTarget.matches(":focus-visible"));
  };

  const holeStyle = {
    "--hl": `${hole.left - PHOTO_BLEED}%`,
    "--ht": `${hole.top - PHOTO_BLEED}%`,
    "--hwd": `${hole.width + PHOTO_BLEED * 2}%`,
    "--hht": `${hole.height + PHOTO_BLEED * 2}%`,
  } as CSSProperties;

  return (
    <button
      type="button"
      aria-pressed={isPausedByUser}
      aria-label={t("pause", { name: t(`${frame.id}.name`) })}
      aria-describedby={captionId}
      onClick={() => setIsPausedByUser((paused) => !paused)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={() => setIsKeyboardFocused(false)}
      className={cn(FRAME_CLASS, "block cursor-pointer")}
      style={frameStyle(position, mobilePosition, image)}
    >
      <span
        className="absolute top-(--ht) left-(--hl) h-(--hht) w-(--hwd) overflow-hidden bg-blush"
        style={holeStyle}
      >
        {frame.photos.map((photo, index) => (
          <motion.span
            key={photo.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={CROSSFADE}
            aria-hidden={index !== current}
          >
            <Image
              src={photo.src}
              fill
              sizes={frameSizes(position, mobilePosition, image, hole.width / 100)}
              alt={t(`${frame.id}.photos.${PHOTO_KEYS[index]}`)}
              draggable={false}
              className="object-cover select-none"
            />
          </motion.span>
        ))}
      </span>
      <Image
        src={frame.src}
        width={frame.width}
        height={frame.height}
        sizes={frameSizes(position, mobilePosition, image)}
        alt=""
        draggable={false}
        className="relative size-full select-none"
      />
      <span id={captionId} className="sr-only">
        {t(`${frame.id}.photos.${PHOTO_KEYS[current]}`)}
      </span>
    </button>
  );
}
