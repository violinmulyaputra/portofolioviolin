import type { ReactNode } from "react";

const HEADING_CLASS = "font-display text-section font-medium text-rose";

type SectionHeadingProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionHeading({ id, className, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className={className ? `${HEADING_CLASS} ${className}` : HEADING_CLASS}>
      {children}
    </h2>
  );
}
