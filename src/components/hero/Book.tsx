"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  DESK_CLASS,
  placementSizes,
  placementStyle,
  spineFontSize,
  type BookData,
} from "@/components/hero/desk-layout";
import { SHORT_SPRING } from "@/components/hero/motion";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type BookProps = {
  book: BookData;
};

export function Book({ book }: BookProps) {
  const t = useTranslations("Hero.books");
  const spineText = t(`${book.key}.spine`);
  const { spine, placement, image } = book;

  const style = {
    ...placementStyle(placement, image),
    "--spine-c": `${spineFontSize(spineText, spine, placement.compact.height, image)}cqh`,
    "--spine-w": `${spineFontSize(spineText, spine, placement.wide.height, image)}cqh`,
    "--sx": `${spine.centerX}%`,
    "--sy": `${spine.centerY}%`,
    "--sr": `${spine.rotate}deg`,
  } as CSSProperties;

  return (
    <MotionLink
      href={book.href}
      aria-label={t(`${book.key}.label`)}
      className={cn(DESK_CLASS, "block snap-center")}
      style={style}
      whileHover={{ y: "-8%" }}
      whileFocus={{ y: "-8%" }}
      whileTap={{ y: "-4%" }}
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
      <span
        aria-hidden="true"
        className={cn(
          "spine-text pointer-events-none absolute top-(--sy) left-(--sx) -translate-x-1/2 -translate-y-1/2 rotate-(--sr) font-hand leading-none font-bold tracking-wide whitespace-nowrap text-foreground uppercase",
          spine.orientation === "vertical" && "text-vertical",
        )}
      >
        {spineText}
      </span>
    </MotionLink>
  );
}
