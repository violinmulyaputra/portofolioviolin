"use client";

import Image from "next/image";
import { MotionConfig } from "framer-motion";

import { Book } from "@/components/hero/Book";
import {
  BOOKS,
  DECORATIONS,
  DESK_CLASS,
  placementSizes,
  placementStyle,
  STICKY_NOTES,
} from "@/components/hero/desk-layout";
import { Frame } from "@/components/hero/Frame";
import { Lamp } from "@/components/hero/Lamp";
import { StickyNote } from "@/components/hero/StickyNote";
import { FRAMES } from "@/data/frames";
import { SOCIALS } from "@/data/socials";

export function Desk() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="desk-scene relative isolate mx-auto overflow-hidden xl:overflow-visible aspect-desk-compact w-full max-w-desk-compact min-w-desk xl:absolute xl:inset-0 xl:aspect-auto xl:max-w-none xl:min-w-0">
        {DECORATIONS.map((item) => (
          <div
            key={item.key}
            className={DESK_CLASS}
            style={placementStyle(item.placement, item.image)}
          >
            <Image
              src={item.image.src}
              width={item.image.width}
              height={item.image.height}
              sizes={placementSizes(item.placement, item.image)}
              alt=""
              draggable={false}
              className="size-full select-none"
            />
          </div>
        ))}

        {BOOKS.map((book) => (
          <Book key={book.key} book={book} />
        ))}

        {STICKY_NOTES.map((note) => {
          const social = SOCIALS.find((item) => item.key === note.key);
          if (!social) return null;
          return (
            <StickyNote
              key={note.key}
              social={social}
              image={note.image}
              placement={note.placement}
            />
          );
        })}

        <Lamp />

        {Object.values(FRAMES).map((frame) => (
          <Frame key={frame.id} frame={frame} />
        ))}
      </div>
    </MotionConfig>
  );
}
