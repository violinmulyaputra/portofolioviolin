type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M4 10.75h11.2l-3.6-3.6 1.77-1.77L20.04 12l-6.67 6.62-1.77-1.77 3.6-3.6H4z"
        className="fill-current"
      />
    </svg>
  );
}
