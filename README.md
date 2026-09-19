# Terus Tech

Corporate website for Terus Tech — built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS, wired to design tokens in `styles/tokens.css`
- `next/font` for Space Grotesk, IBM Plex Sans and IBM Plex Mono
- [`motion`](https://motion.dev/) for scroll reveals and the hero timeline
- [`lucide-react`](https://lucide.dev/) for icons
- MDX (via `next-mdx-remote`, frontmatter validated with `zod`) for case studies and Insights articles
- Playwright + `@axe-core/playwright` for end-to-end and accessibility tests

## Setup

```bash
pnpm install
pnpm dev
```

Visit `/design-system` in development (it 404s in production) for a preview of every colour, type style, spacing step, radius and core component in both themes.

## Scripts

```bash
pnpm dev                # start the dev server
pnpm build               # production build (output: standalone)
pnpm start                # run the production build
pnpm lint / lint:fix      # eslint
pnpm typecheck            # tsc --noEmit
pnpm format / format:check # prettier
pnpm test                 # Playwright + axe suite (builds and starts the app first)
pnpm check:placeholders   # report every [BRACKETED] placeholder still in content
```

Husky runs `lint-staged` (eslint + prettier) on commit and `commitlint` on the commit message (Conventional Commits).

## Content editing

Nothing here needs a CMS — copy lives in plain TypeScript and MDX files.

| What                                           | Where                    |
| ---------------------------------------------- | ------------------------ |
| Nav, footer, contact details, announcement bar | `content/site.ts`        |
| Home page copy                                 | `content/home.ts`        |
| Every other page's copy                        | `content/pages/*.ts`     |
| Case studies                                   | `content/work/*.mdx`     |
| Insights articles                              | `content/insights/*.mdx` |

**Adding a case study**: create `content/work/your-slug.mdx` with frontmatter matching `CaseStudyFrontmatter` in `lib/mdx.ts` (`title`, `client`, `serviceType`, `year`, `timeToFirstRelease`, `stack`, `outcome`, `summary`, `published`). Body sections use `## The problem`, `## What we built`, `## The outcome`, `## What's next` as `##` headings. Set `published: false` until the facts are real and the client has signed off — unpublished case studies build fine (so drafts can be reviewed via `pnpm dev`) but 404 in production and are excluded from the sitemap. See `content/work/example-first-phase.mdx` for the template.

**Adding an Insights article**: same idea in `content/insights/your-slug.mdx`, matching `ArticleFrontmatter` (`title`, `date` (optional), `category` — one of `Delivery`, `Engineering`, `GIS`, `Case notes` — and `published`). Reading time is computed automatically.

## The placeholder workflow

Any fact that isn't real yet (an email address, a team member's name, a client's outcome) is written as a bracketed placeholder, e.g. `[EMAIL]`, and rendered through the `<Placeholder>` component (`components/ui/Placeholder.tsx`). In development this renders with a dashed accent outline so it's obvious what's still missing; in production it renders as plain text with no visual flag.

Run `pnpm check:placeholders` at any time to get a full list of every placeholder left in `content/`, `app/` and `components/`, with file and line number. CI runs this as a report (see `.github/workflows/ci.yml`) — it doesn't fail the build today, since real content for these fields (team details, contact info, the registered company name) hasn't been supplied yet. Once it has, wire that step to fail on the production branch so nothing with an unresolved placeholder can ship.

## Known gaps

A few things are deliberately incomplete because the source material for them doesn't exist yet (see the original brief, section 16, for the full list the business still owes):

- **No real logo asset.** `public/brand/` is reserved for the eventual `terus-mark.png` (and ideally an SVG master). Until then, the header/footer use a text-only "Terus Tech" wordmark, and the favicon/OG image are generated placeholders (`app/icon.tsx`, `app/opengraph-image.tsx`) — replace both once the mark exists.
- **No mascot.** The brief specifies a "kancil" mouse-deer mascot throughout (hero timeline walker, team avatars, 404 loader, footer peek animation, "why a kancil" copy). It was cut from this build by explicit direction; team avatars use plain icon badges instead.
- **Real content missing**: team names/roles, contact email and WhatsApp number, the registered company name and SSM number, managed-services pricing, and every case study / Insights article body. All render as placeholders today.
- **Email provider**: `lib/email.ts` implements `sendContactEmail()` behind a small interface but currently just logs submissions — no provider (Resend, Postmark, SES, ...) has been chosen yet. Set `CONTACT_TO_EMAIL` and wire a real provider in when one is picked.
- **Cross-browser testing**: the Playwright suite in this environment only has Chromium available. `playwright.config.ts` is set up so adding Firefox/WebKit projects is a one-line change once those browsers can be installed (`pnpm exec playwright install firefox webkit`), and CI's `e2e` job already runs a fresh `playwright install` so browsers work there.

## Deployment

The app builds as a [Next.js standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output). `Dockerfile` is a multi-stage build (deps → build → run) producing a minimal runtime image:

```bash
docker build -t terustechweb .
docker run -p 3000:3000 --env-file .env.production terustechweb
```

Set `CONTACT_TO_EMAIL` (and whichever provider credentials it ends up needing) as environment variables at deploy time.
