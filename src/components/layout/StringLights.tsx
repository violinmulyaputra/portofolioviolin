"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  LIGHTS_IMAGES,
  STRING_LIGHTS_SIZES,
  stringLightsVars,
} from "@/components/layout/string-lights-layout";
import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const COPIES = ["string-lights-copy-left", "string-lights-copy-right"];

type LightsImage = (typeof LIGHTS_IMAGES)[keyof typeof LIGHTS_IMAGES];

function LightsCopies({
  image,
  preloadFirst = false,
}: {
  image: LightsImage;
  preloadFirst?: boolean;
}) {
  return COPIES.map((copyClass, index) => (
    <Image
      key={copyClass}
      src={image.src}
      width={image.width}
      height={image.height}
      sizes={STRING_LIGHTS_SIZES}
      alt=""
      aria-hidden="true"
      draggable={false}
      preload={preloadFirst && index === 0}
      className={copyClass}
    />
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
      style={stringLightsVars()}
    >
      <span className="string-lights-track block">
        <span aria-hidden="true" className="absolute inset-0">
          <LightsCopies image={LIGHTS_IMAGES.off} preloadFirst />
        </span>
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          initial={false}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
        >
          <LightsCopies image={LIGHTS_IMAGES.on} />
        </motion.span>
      </span>
    </button>
  );
}
