import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "default" | "small";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-body text-body font-medium transition-transform duration-200 ease-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  default: "h-12 px-5",
  small: "h-10 px-5",
};

const variants: Record<Variant, Record<"default" | "night", string>> = {
  primary: {
    default: "bg-accent text-on-accent",
    night: "bg-accent text-on-accent",
  },
  ghost: {
    default: "border border-ink text-ink",
    night: "border border-on-night/50 text-on-night",
  },
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  night?: boolean;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  night = false,
  showArrow = true,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [base, sizes[size], variants[variant][night ? "night" : "default"], className].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 ease-soft group-hover:translate-x-1"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}
