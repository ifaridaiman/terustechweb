import type { HTMLAttributes } from "react";

type CardVariant = "surface" | "paper" | "tile-accent";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
}

const variants: Record<CardVariant, string> = {
  surface: "bg-surface border border-line text-ink",
  paper: "bg-paper border border-line text-ink",
  "tile-accent": "bg-accent text-on-accent border border-accent",
};

export function Card({ variant = "surface", hover = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-md p-5 transition-transform duration-200 ease-soft",
        variants[variant],
        hover ? "hover:-translate-y-0.5 hover:shadow-lift" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
