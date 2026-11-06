type HomeIconProps = {
  className?: string;
};

export function HomeIcon({ className }: HomeIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M14.6 4.6a2 2 0 0 1 2.8 0l10.3 9.6c.97.9.33 2.6-1 2.6H25v9.2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9.2H5.3c-1.33 0-1.97-1.7-1-2.6z"
        className="fill-primary"
      />
      <rect
        x="13.5"
        y="19.5"
        width="5"
        height="8.5"
        rx="1.5"
        className="fill-background"
      />
    </svg>
  );
}
