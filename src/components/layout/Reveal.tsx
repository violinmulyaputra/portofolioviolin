"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { INSTANT, SHORT_SPRING } from "@/lib/motion";

const REVEAL_OFFSET_PX = 12;
const REVEAL_FADE_S = 0.4;
const REVEAL_THRESHOLD = 0.2;

type RevealState = "hidden" | "instant" | "visible";

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
  className?: string;
  children: ReactNode;
};

export function Reveal({ className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<RevealState>("hidden");

  // Activity reset
  useLayoutEffect(() => () => setState("hidden"), []);

  useEffect(() => {
    const element = ref.current;
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
  }, []);

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={prefersReducedMotion ? "instant" : state}
    >
      {children}
    </motion.section>
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
