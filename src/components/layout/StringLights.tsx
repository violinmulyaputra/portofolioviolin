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

const SIDES = [
  {
    key: "left",
    copyClass: "string-lights-copy-left",
    hitClass: "left-0",
    labels: { on: "leftOff", off: "leftOn" },
  },
  {
    key: "right",
    copyClass: "string-lights-copy-right",
    hitClass: "right-0",
    labels: { on: "rightOff", off: "rightOn" },
  },
] as const;

type Side = (typeof SIDES)[number]["key"];

type LightsCopyProps = {
  copyClass: string;
  lit: boolean;
  preload: boolean;
};

function LightsCopy({ copyClass, lit, preload }: LightsCopyProps) {
  const prefersReducedMotion = useReducedMotion();
  const imageProps = {
    sizes: STRING_LIGHTS_SIZES,
    "aria-hidden": true,
    draggable: false,
    className: "absolute inset-0 size-full",
  };

  return (
    <span aria-hidden="true" className={cn(copyClass, "pointer-events-none")}>
      <Image
        {...imageProps}
        alt=""
        src={LIGHTS_IMAGES.off.src}
        width={LIGHTS_IMAGES.off.width}
        height={LIGHTS_IMAGES.off.height}
        preload={preload}
      />
      <motion.span
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
      >
        <Image
          {...imageProps}
          alt=""
          src={LIGHTS_IMAGES.on.src}
          width={LIGHTS_IMAGES.on.width}
          height={LIGHTS_IMAGES.on.height}
        />
      </motion.span>
    </span>
  );
}

type StringLightsProps = {
  className?: string;
};

export function StringLights({ className }: StringLightsProps) {
  const t = useTranslations("StringLights");
  const [lit, setLit] = useState<Record<Side, boolean>>({
    left: false,
    right: false,
  });

  return (
    <div
      className={cn("string-lights select-none", className)}
      style={stringLightsVars()}
    >
      <span className="string-lights-track block">
        {SIDES.map((side, index) => (
          <LightsCopy
            key={side.key}
            copyClass={side.copyClass}
            lit={lit[side.key]}
            preload={index === 0}
          />
        ))}
      </span>
      {SIDES.map((side) => (
        <button
          key={side.key}
          type="button"
          aria-pressed={lit[side.key]}
          aria-label={t(lit[side.key] ? side.labels.on : side.labels.off)}
          onClick={() =>
            setLit((current) => ({
              ...current,
              [side.key]: !current[side.key],
            }))
          }
          className={cn("string-lights-hit", side.hitClass)}
        />
      ))}
    </div>
  );
}
