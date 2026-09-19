import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({ narrow = false, className = "", children, ...props }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full px-5",
        narrow ? "max-w-container-narrow" : "max-w-container-max",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
