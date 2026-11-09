"use client";

import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { INSTANT, SHORT_SPRING } from "@/lib/motion";

const REVEAL_OFFSET_PX = 12;
const REVEAL_FADE_S = 0.4;
const REVEAL_THRESHOLD = 0.2;

type RevealState = "hidden" | "instant" | "visible";

const REVEAL_TAGS = {
  section: motion.section,
  div: motion.div,
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET_PX, transition: INSTANT },
  instant: { opacity: 1, y: 0, transition: INSTANT },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      y: { ...SHORT_SPRING, delay },
      opacity: { duration: REVEAL_FADE_S, ease: "easeOut", delay },
    },
  }),
};

type RevealProps = {
  as?: keyof typeof REVEAL_TAGS;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
};

export function Reveal({
  as = "section",
  className,
  labelledBy,
  children,
}: RevealProps) {
  const Tag = REVEAL_TAGS[as];
  const [element, setElement] = useState<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<RevealState>("hidden");

  // Activity reset
  useLayoutEffect(() => () => setState("hidden"), []);

  useEffect(() => {
    if (!element) return;
    let firstCallback = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState(firstCallback ? "instant" : "visible");
          observer.disconnect();
        }
        firstCallback = false;
      },
      { threshold: REVEAL_THRESHOLD },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <Tag
      ref={setElement}
      className={className}
      aria-labelledby={labelledBy}
      initial="hidden"
      animate={prefersReducedMotion ? "instant" : state}
    >
      {children}
    </Tag>
  );
}

type RevealItemProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function RevealItem({ delay = 0, className, children }: RevealItemProps) {
  return (
    <motion.div className={className} custom={delay} variants={ITEM_VARIANTS}>
      {children}
    </motion.div>
  );
}
