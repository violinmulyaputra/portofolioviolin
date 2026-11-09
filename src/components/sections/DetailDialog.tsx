"use client";

import { useState, type ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type DetailDialogProps = {
  triggerLabel: string;
  triggerAriaLabel: string;
  closeLabel: string;
  children: ReactNode;
};

export function DetailDialog({
  triggerLabel,
  triggerAriaLabel,
  closeLabel,
  children,
}: DetailDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label={triggerAriaLabel}
        className={buttonVariants({ size: "card" })}
      >
        {triggerLabel}
      </DialogTrigger>
      <DialogContent open={open} closeLabel={closeLabel}>
        <div className="overflow-y-auto p-4 md:p-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
