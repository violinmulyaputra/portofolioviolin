import type { ReactNode } from "react";

import { PageHeader } from "@/components/layout/PageHeader";
import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  intro?: string;
  leading?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function PageShell({
  title,
  intro,
  leading,
  className,
  children,
}: PageShellProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn(
        "flex-1 outline-none",
        leading
          ? "pb-page md:pb-page-desktop"
          : "py-page md:py-page-desktop",
        className,
      )}
    >
      {leading}
      <div className="container-content">
        <PageHeader title={title} intro={intro} />
        {children}
      </div>
    </main>
  );
}
