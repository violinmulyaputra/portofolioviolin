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
      {isOpen ? (
        <g className="fill-current">
          <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" transform="rotate(45 12 12)" />
          <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" transform="rotate(-45 12 12)" />
        </g>
      ) : (
        <g className="fill-current">
          <rect x="4" y="5.75" width="16" height="2.5" rx="1.25" />
          <rect x="4" y="10.75" width="16" height="2.5" rx="1.25" />
          <rect x="4" y="15.75" width="16" height="2.5" rx="1.25" />
        </g>
      )}
    </svg>
  );
}
