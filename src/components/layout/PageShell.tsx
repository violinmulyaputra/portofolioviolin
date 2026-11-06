import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  children?: ReactNode;
};

export function PageShell({ title, children }: PageShellProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-content flex-1 py-section outline-none md:py-section-desktop"
    >
      <h1 className="font-display text-section font-medium">{title}</h1>
      {children}
    </main>
  );
}
