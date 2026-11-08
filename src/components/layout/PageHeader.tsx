import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  intro?: string;
  className?: string;
};

export function PageHeader({ title, intro, className }: PageHeaderProps) {
  return (
    <header className={cn("text-center", className)}>
      <h1 className="font-display text-section font-semibold text-rose">
        {title}
      </h1>
      {intro && (
        <p className="mx-auto mt-4 max-w-4xl text-lead text-balance text-muted-foreground">
          {intro}
        </p>
      )}
    </header>
  );
}
