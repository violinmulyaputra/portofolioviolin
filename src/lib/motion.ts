import type { Transition } from "framer-motion";

export const SHORT_SPRING: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 18,
  mass: 0.6,
};

export const CROSSFADE: Transition = {
  duration: 0.8,
  ease: "easeInOut",
};

export const INSTANT: Transition = {
  duration: 0,
};

export const REVEAL_STAGGER_S = 0.08;
