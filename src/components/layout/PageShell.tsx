import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-content flex-1 py-section outline-none md:py-section-desktop"
    >
      <h1 className="font-display text-section font-medium">{title}</h1>
      {intro && (
        <p className="mt-4 max-w-2xl text-lead text-muted-foreground">
          {intro}
        </p>
      )}
      {children}
    </main>
  );
}
