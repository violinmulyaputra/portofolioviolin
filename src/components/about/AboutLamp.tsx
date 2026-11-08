"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  ABOUT_IMAGES,
  rectStyle,
  type Rect,
} from "@/components/about/about-scene-layout";
import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const IMAGE_CLASS = "pointer-events-none select-none";

type AboutLampProps = {
  item: { overlay: Rect; hitZones: readonly Rect[] };
  sizes: string;
  overlaySizes: string;
  className?: string;
  style?: CSSProperties;
};

export function AboutLamp({ item, sizes, overlaySizes, className, style }: AboutLampProps) {
  const t = useTranslations("AboutPage");
  const [isOn, setIsOn] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { lampOff, lampOn } = ABOUT_IMAGES;

  return (
    <button
      type="button"
      aria-pressed={isOn}
      aria-label={t(isOn ? "lampOff" : "lampOn")}
      onClick={() => setIsOn((on) => !on)}
      className={cn("contact-object pointer-events-none block", className)}
      style={style}
    >
      <motion.span
        aria-hidden="true"
        className="lamp-glow about-lamp-glow pointer-events-none absolute -z-10"
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
        className={cn("size-full", IMAGE_CLASS, isOn && "invisible")}
      />
      <Image
        src={lampOn.src}
        width={lampOn.width}
        height={lampOn.height}
        sizes={overlaySizes}
        alt=""
        draggable={false}
        className={cn("contact-overlay", IMAGE_CLASS, !isOn && "invisible")}
        style={rectStyle(item.overlay)}
      />
      {item.hitZones.map((zone, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="contact-overlay pointer-events-auto cursor-pointer"
          style={rectStyle(zone)}
        />
      ))}
    </button>
  );
}
