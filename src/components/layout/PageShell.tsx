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
        "flex-1 outline-none",
        leading
          ? "pt-2 pb-section md:pb-section-desktop lg:pt-1"
          : "py-section md:py-section-desktop",
      )}
    >
      {leading}
      <div className={cn("container-content", centered && "text-center")}>
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
      </div>
    </main>
  );
}
