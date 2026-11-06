type MenuIconProps = {
  isOpen: boolean;
  className?: string;
};

export function MenuIcon({ isOpen, className }: MenuIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d={isOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
        className="fill-none stroke-current"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
