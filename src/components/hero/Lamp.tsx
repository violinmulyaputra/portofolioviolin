"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  DESK_CLASS,
  ILLUSTRATIONS,
  LAMP_PLACEMENT,
  placementSizes,
  placementStyle,
} from "@/components/hero/desk-layout";
import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Lamp() {
  const t = useTranslations("Hero");
  const [isOn, setIsOn] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { lampOff, lampOn } = ILLUSTRATIONS;
  const sizes = placementSizes(LAMP_PLACEMENT, lampOff);

  return (
    <button
      type="button"
      aria-pressed={isOn}
      aria-label={t("lamp")}
      onClick={() => setIsOn((on) => !on)}
      className={cn(DESK_CLASS, "block cursor-pointer snap-center")}
      style={placementStyle(LAMP_PLACEMENT, lampOff)}
    >
      <motion.span
        aria-hidden="true"
        className="lamp-glow pointer-events-none absolute -z-10"
        initial={false}
        animate={isOn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
      />
      <Image
        src={lampOff.src}
        width={lampOff.width}
        height={lampOff.height}
        sizes={sizes}
        alt=""
        draggable={false}
        className={cn("size-full select-none", isOn && "invisible")}
      />
      <Image
        src={lampOn.src}
        width={lampOn.width}
        height={lampOn.height}
        sizes={sizes}
        alt=""
        draggable={false}
        className={cn(
          "absolute inset-0 size-full select-none",
          !isOn && "invisible",
        )}
      />
    </button>
  );
}
