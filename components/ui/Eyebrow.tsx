import type { HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  night?: boolean;
}

export function Eyebrow({ night = false, className = "", children, ...props }: EyebrowProps) {
  return (
    <p
      className={[
        "font-mono text-label font-medium uppercase",
        night ? "text-on-night/70" : "text-ink-muted",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
