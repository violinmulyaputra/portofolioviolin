"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const LIGHTS = {
  off: { src: "/illustrations/lights-off.webp", width: 2167, height: 726 },
  on: { src: "/illustrations/lights-on.webp", width: 2167, height: 726 },
};

const VISIBLE_BAND = { top: 100, height: 500 };

const FRAME_STYLE = {
  aspectRatio: `${LIGHTS.off.width} / ${VISIBLE_BAND.height}`,
};

const BAND_STYLE = {
  top: `${(-VISIBLE_BAND.top / VISIBLE_BAND.height) * 100}%`,
};

const SIZES = "(min-width: 744px) 680px, calc(100vw - 32px)";

type StringLightsProps = {
  className?: string;
};

export function StringLights({ className }: StringLightsProps) {
  const t = useTranslations("StringLights");
  const [lit, setLit] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      aria-pressed={lit}
      aria-label={lit ? t("turnOff") : t("turnOn")}
      onClick={() => setLit((on) => !on)}
      className={cn(
        "relative mx-auto block w-full max-w-string-lights cursor-pointer overflow-hidden rounded-card select-none",
        className,
      )}
      style={FRAME_STYLE}
    >
      <span className="absolute inset-x-0" style={BAND_STYLE}>
        <Image
          src={LIGHTS.off.src}
          width={LIGHTS.off.width}
          height={LIGHTS.off.height}
          sizes={SIZES}
          alt=""
          preload
          draggable={false}
          className="h-auto w-full"
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          initial={false}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
        >
          <Image
            src={LIGHTS.on.src}
            width={LIGHTS.on.width}
            height={LIGHTS.on.height}
            sizes={SIZES}
            alt=""
            loading="eager"
            draggable={false}
            className="size-full"
          />
        </motion.span>
      </span>
    </button>
  );
}
