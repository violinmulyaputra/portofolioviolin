"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { SHORT_SPRING } from "@/lib/motion";

type TiltFrameProps = {
  tilt: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function TiltFrame({ tilt, className, style, children }: TiltFrameProps) {
  const prefersReducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);
  const [hovered, setHovered] = useState(false);
  const enabled = canHover && !prefersReducedMotion;

  useEffect(() => {
    const query = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ ...style, transformOrigin: "50% 0%" }}
      initial={false}
      animate={{ rotate: enabled && hovered ? tilt : 0 }}
      transition={SHORT_SPRING}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      {children}
    </motion.div>
  );
}
