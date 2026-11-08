import type { ReactNode } from "react";

import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import type { ResolvedPhoto } from "@/data/shared";
import { cn } from "@/lib/utils";

type EntryCardProps = {
  titleId: string;
  title: string;
  summary: string;
  technologies: string[];
  technologiesLabel: string;
  photos: ResolvedPhoto[];
  photosLabel: string;
  action: ReactNode;
  headingLevel?: "h2" | "h3";
  sizes: string;
  aboveFold?: boolean;
  className?: string;
};

export function EntryCard({
  titleId,
  title,
  summary,
  technologies,
  technologiesLabel,
  photos,
  photosLabel,
  action,
  headingLevel: Heading = "h3",
  sizes,
  aboveFold = false,
  className,
}: EntryCardProps) {
  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "card-lift flex h-full flex-col gap-4 rounded-card bg-card p-4 shadow-soft",
        className,
      )}
    >
      <PhotoCarousel
        photos={photos}
        label={photosLabel}
        sizes={sizes}
        aboveFold={aboveFold}
      />
      <div className="flex flex-1 flex-col gap-1 px-1">
        <Heading
          id={titleId}
          className="lines-2 line-clamp-2 font-display text-2xl leading-tight font-medium text-foreground"
        >
          {title}
        </Heading>
        <p className="lines-2 mt-2 line-clamp-2 text-base leading-body text-foreground">
          {summary}
        </p>
        {technologies.length > 0 && (
          <p className="relative line-clamp-1 text-base leading-body text-muted-foreground">
            <span className="sr-only">{technologiesLabel}: </span>
            {technologies.join(", ")}
          </p>
        )}
        <div className="mt-auto pt-4">{action}</div>
      </div>
    </article>
  );
}
