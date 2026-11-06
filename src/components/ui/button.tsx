import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-pill font-sans font-bold whitespace-nowrap shadow-soft select-none disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-10 px-5 text-base",
        hero: "relative h-8 px-3 text-lead-mobile before:absolute before:inset-x-0 before:-inset-y-1 md:h-12 md:px-6 md:text-base md:before:hidden",
        compact: "h-10 px-5 text-sm md:h-12 md:px-6 md:text-button-compact",
        icon: "size-10 md:size-12",
      },
      effect: {
        lift: "transition-[translate,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift active:translate-y-px active:shadow-soft",
        color: "nav-hover-fill",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      effect: "lift",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
