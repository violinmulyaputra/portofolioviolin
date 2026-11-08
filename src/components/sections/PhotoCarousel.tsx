"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import type { ResolvedPhoto } from "@/data/experiences";
import { cn } from "@/lib/utils";

type PhotoCarouselVariant = "card" | "dialog";

type PhotoCarouselProps = {
  photos: ResolvedPhoto[];
  label: string;
  sizes: string;
  variant?: PhotoCarouselVariant;
  aboveFold?: boolean;
  className?: string;
};

const SLIDE_CLASS: Record<PhotoCarouselVariant, string> = {
  card: "aspect-photo",
  dialog: "aspect-photo photo-slide-dialog bg-sand",
};

const FIT_CLASS: Record<PhotoCarouselVariant, string> = {
  card: "object-cover",
  dialog: "object-contain",
};

const ARROW_CLASS: Record<PhotoCarouselVariant, string> = {
  card: "hidden size-9 md:inline-flex",
  dialog: "size-10",
};

const ARROW_BASE = cn(
  buttonVariants({ variant: "secondary", size: null, effect: "color" }),
  "absolute top-1/2 z-10 -translate-y-1/2",
  "aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-blush aria-disabled:text-muted-foreground aria-disabled:shadow-none",
);

export function PhotoCarousel({
  photos,
  label,
  sizes,
  variant = "card",
  aboveFold = false,
  className,
}: PhotoCarouselProps) {
  const t = useTranslations("Experiences");
  const trackRef = useRef<HTMLUListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = photos.length;

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || total < 2) return;
    track.addEventListener("scroll", updateActive, { passive: true });
    return () => track.removeEventListener("scroll", updateActive);
  }, [total, updateActive]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(Math.max(index, 0), total - 1);
    track.scrollTo({
      left: target * track.clientWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  if (total === 0) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "w-full rounded-image",
          SLIDE_CLASS[variant],
          "bg-blush",
          className,
        )}
      />
    );
  }

  const slides = photos.map((photo, index) => (
    <div
      key={photo.src}
      className={cn("relative w-full overflow-hidden", SLIDE_CLASS[variant])}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        loading={aboveFold && index === 0 ? "eager" : "lazy"}
        fetchPriority={aboveFold && index === 0 ? "high" : undefined}
        className={FIT_CLASS[variant]}
      />
    </div>
  ));

  if (total === 1) {
    return (
      <div className={cn("overflow-hidden rounded-image", className)}>
        {slides[0]}
      </div>
    );
  }

  const atStart = active === 0;
  const atEnd = active === total - 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
    >
      <div className="relative">
        <ul ref={trackRef} className="photo-track rounded-image">
          {slides.map((slide, index) => (
            <li
              key={photos[index]?.src}
              className="w-full shrink-0 snap-start"
            >
              {slide}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => !atStart && goTo(active - 1)}
          aria-disabled={atStart}
          aria-label={t("previousPhoto")}
          className={cn(ARROW_BASE, ARROW_CLASS[variant], "left-2")}
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => !atEnd && goTo(active + 1)}
          aria-disabled={atEnd}
          aria-label={t("nextPhoto")}
          className={cn(ARROW_BASE, ARROW_CLASS[variant], "right-2")}
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
      <div className="mt-2 flex justify-center gap-1">
        {photos.map((photo, index) => {
          const isActive = index === active;
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={t("photoOf", { n: index + 1, total })}
              aria-current={isActive ? "true" : undefined}
              className="inline-flex size-6 items-center justify-center rounded-pill"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2 rounded-pill transition-[width,background-color] duration-150 ease-out",
                  isActive ? "w-5 bg-berry" : "w-2 bg-pink",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
