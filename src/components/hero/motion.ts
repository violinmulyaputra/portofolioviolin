import type { Transition } from "framer-motion";

export const SHORT_SPRING: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 18,
  mass: 0.6,
};

export const SLIDE_SPRING: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 30,
};
