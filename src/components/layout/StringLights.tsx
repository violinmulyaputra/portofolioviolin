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

const SIZES = "(min-width: 1432px) 780px, 55vw";

const COPIES = ["string-lights-copy-left", "string-lights-copy-right"];

type LightsImage = (typeof LIGHTS)[keyof typeof LIGHTS];

function LightsCopies({
  image,
  preloadFirst = false,
}: {
  image: LightsImage;
  preloadFirst?: boolean;
}) {
  return COPIES.map((copyClass, index) => (
    <span key={copyClass} className={copyClass}>
      <span className="string-lights-band">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          sizes={SIZES}
          alt=""
          aria-hidden="true"
          draggable={false}
          preload={preloadFirst && index === 0}
          className="h-auto w-full"
        />
      </span>
    </span>
  ));
}

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
      className={cn("string-lights cursor-pointer select-none", className)}
    >
      <span className="string-lights-track block">
        <span aria-hidden="true" className="absolute inset-0">
          <LightsCopies image={LIGHTS.off} preloadFirst />
        </span>
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          initial={false}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
        >
          <LightsCopies image={LIGHTS.on} />
        </motion.span>
      </span>
    </button>
  );
}
