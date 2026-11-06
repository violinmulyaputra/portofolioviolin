import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  intro?: string;
  centered?: boolean;
  titleClassName?: string;
  leading?: ReactNode;
  children?: ReactNode;
};

export function PageShell({
  title,
  intro,
  centered = false,
  titleClassName = "font-medium",
  leading,
  children,
}: PageShellProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn(
        "container-content flex-1 outline-none",
        leading
          ? "pt-4 pb-section md:pt-6 md:pb-section-desktop"
          : "py-section md:py-section-desktop",
        centered && "text-center",
      )}
    >
      {leading}
      <h1 className={`font-display text-section ${titleClassName}`}>
        {title}
      </h1>
      {intro && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lead text-muted-foreground",
            centered && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
      {children}
    </main>
  );
}
