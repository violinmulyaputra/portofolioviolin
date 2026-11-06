"use client";

import { MotionConfig } from "framer-motion";

import { frameWallStyle } from "@/components/hero/desk-layout";
import { Frame } from "@/components/hero/Frame";
import { FRAMES } from "@/data/frames";
import { cn } from "@/lib/utils";

type FrameWallProps = {
  className?: string;
};

export function FrameWall({ className }: FrameWallProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={cn(
          "relative aspect-frame-wall-mobile w-full md:aspect-frame-wall xl:absolute xl:top-(--wall-top) xl:left-(--wall-left) xl:h-(--wall-height) xl:w-(--wall-width)",
          className,
        )}
        style={frameWallStyle()}
      >
        {Object.values(FRAMES).map((frame) => (
          <Frame key={frame.id} frame={frame} />
        ))}
      </div>
    </MotionConfig>
  );
}
