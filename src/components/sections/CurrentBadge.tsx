type CurrentBadgeProps = {
  label: string;
};

export function CurrentBadge({ label }: CurrentBadgeProps) {
  return (
    <span className="rounded-pill bg-butter px-3 text-base font-bold text-foreground">
      {label}
    </span>
  );
}
