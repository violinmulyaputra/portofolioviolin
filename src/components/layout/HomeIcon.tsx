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
        d="M8 13.5V26h16V13.5"
        className="fill-peach stroke-foreground"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 26v-6.5h5V26"
        className="fill-primary stroke-foreground"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15.5 16 6l11 9.5"
        className="fill-none stroke-foreground"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
