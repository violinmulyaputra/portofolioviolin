"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  FRAME_PLACEMENTS,
  placementSizes,
  placementStyle,
  WALL_CLASS,
} from "@/components/hero/desk-layout";
import { SLIDE_SPRING } from "@/components/hero/motion";
import { FRAME_PHOTO_INTERVAL_MS, type FrameData } from "@/data/frames";
import { cn } from "@/lib/utils";

const PHOTO_BLEED = 1;

const PHOTO_KEYS = ["1", "2", "3"] as const;

type FrameProps = {
  frame: FrameData;
};

type SlideState = {
  current: number;
  previous: number | null;
};

function photoTarget(index: number, slide: SlideState) {
  if (index === slide.current) return "0%";
  if (index === slide.previous) return "-100%";
  return "100%";
}

export function Frame({ frame }: FrameProps) {
  const t = useTranslations("Hero.frames");
  const prefersReducedMotion = useReducedMotion();
  const [slide, setSlide] = useState<SlideState>({ current: 0, previous: null });
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const captionId = useId();

  const isPaused =
    isHovered || isFocused || isPausedByUser || prefersReducedMotion === true;
  const placement = FRAME_PLACEMENTS[frame.id];
  const image = { src: frame.src, width: frame.width, height: frame.height };
  const { hole } = frame;

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setSlide((state) => ({
        current: (state.current + 1) % frame.photos.length,
        previous: state.current,
      }));
    }, FRAME_PHOTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, frame.photos.length]);

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
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(WALL_CLASS, "block cursor-pointer snap-center")}
      style={placementStyle(placement, image)}
    >
      <span
        className="absolute top-(--ht) left-(--hl) h-(--hht) w-(--hwd) overflow-hidden bg-sand"
        style={holeStyle}
      >
        {frame.photos.map((photo, index) => {
          const target = photoTarget(index, slide);
          return (
            <motion.span
              key={photo.src}
              className="absolute inset-0"
              initial={false}
              animate={{ x: target }}
              transition={target === "100%" ? { duration: 0 } : SLIDE_SPRING}
              aria-hidden={index !== slide.current}
            >
              <Image
                src={photo.src}
                fill
                sizes={placementSizes(placement, image, hole.width / 100)}
                alt={t(`${frame.id}.photos.${PHOTO_KEYS[index]}`)}
                draggable={false}
                className="object-cover select-none"
              />
            </motion.span>
          );
        })}
      </span>
      <Image
        src={frame.src}
        width={frame.width}
        height={frame.height}
        sizes={placementSizes(placement, image)}
        alt=""
        draggable={false}
        className="relative size-full select-none"
      />
      <span id={captionId} className="sr-only">
        {t(`${frame.id}.photos.${PHOTO_KEYS[slide.current]}`)}
      </span>
    </button>
  );
}
