"use client";

import type { ComponentProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Dialog as DialogPrimitive } from "radix-ui";

import { CloseIcon } from "@/components/layout/CloseIcon";
import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PANEL_OFFSET_PX = 12;
const PANEL_SCALE = 0.96;

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-display font-medium text-foreground", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-base leading-body text-foreground", className)}
      {...props}
    />
  );
}

type DialogContentProps = Omit<
  ComponentProps<typeof DialogPrimitive.Content>,
  "asChild" | "forceMount"
> & {
  open: boolean;
  closeLabel: string;
};

function DialogContent({
  open,
  closeLabel,
  className,
  children,
  ...props
}: DialogContentProps) {
  const prefersReducedMotion = useReducedMotion();
  const hidden = prefersReducedMotion
    ? { y: 0, scale: 1 }
    : { y: PANEL_OFFSET_PX, scale: PANEL_SCALE };

  return (
    <AnimatePresence>
      {open && (
        <DialogPrimitive.Portal forceMount>
          <DialogPrimitive.Overlay forceMount asChild>
            <motion.div className="fixed inset-0 z-50 bg-overlay" />
          </DialogPrimitive.Overlay>
          <DialogPrimitive.Content forceMount asChild {...props}>
            <motion.div
              initial={hidden}
              animate={{ y: 0, scale: 1 }}
              exit={hidden}
              transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
              className={cn(
                "dialog-panel z-50 overflow-hidden rounded-card bg-card text-foreground shadow-soft outline-none",
                className,
              )}
            >
              <DialogPrimitive.Close
                aria-label={closeLabel}
                className="nav-hover-text absolute top-3 right-3 z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-pill bg-card text-foreground shadow-soft"
              >
                <CloseIcon className="size-5" />
              </DialogPrimitive.Close>
              {children}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      )}
    </AnimatePresence>
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
};
