import type { ReactNode } from "react";

import { DetailDialog } from "@/components/sections/DetailDialog";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { DIALOG_PHOTO_SIZES } from "@/components/sections/photo-sizes";
import { buttonVariants } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ResolvedPhoto } from "@/data/shared";
import { cn } from "@/lib/utils";

const ACTION_WRAP_CLASS = "h-auto min-h-10 max-w-full py-2 text-center whitespace-normal";

export function entryActionClass(variant: "default" | "secondary") {
  return cn(buttonVariants({ variant, size: "sm" }), ACTION_WRAP_CLASS);
}

type EntryDialogLabels = {
  seeDetails: string;
  seeDetailsFor: string;
  close: string;
  photos: string;
  technologies: string;
  role: string;
};

type EntryDialogProps = {
  roleId: string;
  title: string;
  summary: string;
  technologies: string[];
  role: string;
  photos: ResolvedPhoto[];
  labels: EntryDialogLabels;
  actions?: ReactNode;
};

export function EntryDialog({
  roleId,
  title,
  summary,
  technologies,
  role,
  photos,
  labels,
  actions,
}: EntryDialogProps) {
  return (
    <DetailDialog
      triggerLabel={labels.seeDetails}
      triggerAriaLabel={labels.seeDetailsFor}
      closeLabel={labels.close}
    >
      <PhotoCarousel
        photos={photos}
        label={labels.photos}
        sizes={DIALOG_PHOTO_SIZES}
        variant="dialog"
      />
      <DialogTitle className="mt-6 text-2xl leading-tight md:text-3xl">
        {title}
      </DialogTitle>
      {technologies.length > 0 && (
        <ul aria-label={labels.technologies} className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-pill bg-blush px-3 text-base text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      )}
      <DialogDescription className="mt-4">{summary}</DialogDescription>

      {/* Role */}
      <section aria-labelledby={roleId} className="mt-6">
        <h3
          id={roleId}
          className="font-display text-xl font-medium text-foreground"
        >
          {labels.role}
        </h3>
        <p className="mt-2 text-base leading-body text-foreground">{role}</p>
      </section>

      {/* Actions */}
      {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
    </DetailDialog>
  );
}
