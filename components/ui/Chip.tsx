import type { HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "default" | "large";
}

export function Chip({ size = "default", className = "", children, ...props }: ChipProps) {
  const sizeClasses = size === "large" ? "h-10 text-[14px] leading-[22px]" : "h-8 text-xs leading-4";

  return (
    <span
      className={[
        "inline-flex items-center rounded-sm border border-line bg-paper px-3 font-mono font-medium uppercase tracking-[0.06em] text-ink",
        sizeClasses,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
