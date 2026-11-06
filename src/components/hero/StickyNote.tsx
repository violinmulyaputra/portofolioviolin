"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  placementSizes,
  placementStyle,
  WALL_CLASS,
  type DeskPlacement,
  type Illustration,
} from "@/components/hero/desk-layout";
import { SHORT_SPRING } from "@/components/hero/motion";
import type { Social } from "@/data/socials";
import { cn } from "@/lib/utils";

type StickyNoteProps = {
  social: Social;
  image: Illustration;
  placement: DeskPlacement;
};

export function StickyNote({ social, image, placement }: StickyNoteProps) {
  const t = useTranslations("Hero.stickies");

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(social.key)}
      className={cn(WALL_CLASS, "block snap-center")}
      style={placementStyle(placement, image)}
      whileHover={{ rotate: -6, y: "-6%" }}
      whileFocus={{ rotate: -6, y: "-6%" }}
      transition={SHORT_SPRING}
    >
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        sizes={placementSizes(placement, image)}
        alt=""
        draggable={false}
        className="size-full select-none"
      />
    </motion.a>
  );
}
