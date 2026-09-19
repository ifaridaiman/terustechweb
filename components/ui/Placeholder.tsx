interface PlaceholderProps {
  children: string;
  as?: "span" | "div";
}

export function Placeholder({ children, as = "span" }: PlaceholderProps) {
  const Tag = as;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <Tag
      className={
        isDev ? "rounded-sm border border-dashed border-accent bg-accent-tint px-1 text-ink" : undefined
      }
      title={isDev ? "Needs real content" : undefined}
    >
      {children}
    </Tag>
  );
}
