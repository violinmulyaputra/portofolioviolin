"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EDGE_TOLERANCE_PX = 2;

type CardCarouselProps = {
  label: string;
  previousLabel: string;
  nextLabel: string;
  footer?: ReactNode;
  children: ReactNode;
};

const ARROW_CLASS = cn(
  buttonVariants({ variant: "secondary", size: "icon" }),
  "carousel-arrow size-9 md:size-12",
  "aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-blush aria-disabled:text-muted-foreground aria-disabled:shadow-none",
);

export function CardCarousel({
  label,
  previousLabel,
  nextLabel,
  footer,
  children,
}: CardCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrevious(track.scrollLeft > EDGE_TOLERANCE_PX);
    setCanNext(track.scrollLeft < maxScroll - EDGE_TOLERANCE_PX);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    track.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateEdges);
    };
  }, [updateEdges]);

  const scrollByPage = (direction: 1 | -1) => {
    if (direction === 1 ? !canNext : !canPrevious) return;
    const track = trackRef.current;
    const item = track?.firstElementChild;
    if (!track || !(item instanceof HTMLElement)) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = item.offsetWidth + gap;
    const perView = Math.max(1, Math.round((track.clientWidth + gap) / step));
    track.scrollBy({
      left: direction * step * perView,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel-frame">
        <ul ref={trackRef} className="carousel-track">
          {Children.map(children, (child) => (
            <li className="carousel-item">{child}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-disabled={!canPrevious}
          aria-label={previousLabel}
          className={cn(ARROW_CLASS, "carousel-arrow-previous")}
        >
          <ChevronLeft aria-hidden="true" className="size-5 md:size-6" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-disabled={!canNext}
          aria-label={nextLabel}
          className={cn(ARROW_CLASS, "carousel-arrow-next")}
        >
          <ChevronRight aria-hidden="true" className="size-5 md:size-6" />
        </button>
      </div>
      {footer && <div className="mt-8 flex justify-center">{footer}</div>}
    </div>
  );
}
