import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

export const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-9 font-display text-h2 first:mt-0" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-7 font-display text-h3" {...props} />,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-body text-ink-muted" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-ink-muted" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-body text-ink-muted" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <li {...props} />,
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-ink underline decoration-accent underline-offset-4" {...props} />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => <strong className="font-medium text-ink" {...props} />,
  em: (props: HTMLAttributes<HTMLElement>) => <em {...props} />,
};
