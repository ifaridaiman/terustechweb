# Terus Tech

Corporate website for Terus Tech — built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS, wired to design tokens in `styles/tokens.css`
- `next/font` for Space Grotesk, IBM Plex Sans and IBM Plex Mono
- [`lucide-react`](https://lucide.dev/) for icons

## Development

```bash
pnpm install
pnpm dev
```

Visit `/design-system` in development for a preview of every colour, type style, spacing step, radius and core component in both themes.

## Scripts

```bash
pnpm dev          # start the dev server
pnpm build        # production build (output: standalone)
pnpm start        # run the production build
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
pnpm format       # prettier --write
pnpm format:check # prettier --check
```

## Status

This repo is being built in phases (see the project brief). Phase 1 — foundation, tooling and the design-system preview route — is in place. Layout primitives, pages, content and the mascot-free motion system land in later phases.
