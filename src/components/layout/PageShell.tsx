import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  intro?: string;
  centered?: boolean;
  titleClassName?: string;
  children?: ReactNode;
};

export function PageShell({
  title,
  intro,
  centered = false,
  titleClassName = "font-medium",
  children,
}: PageShellProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn(
        "container-content flex-1 py-section outline-none md:py-section-desktop",
        centered && "text-center",
      )}
    >
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
