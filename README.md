# ORIGYN Website

Production-ready website foundation for the ORIGYN platform, built with Next.js App Router.

## Technical Foundation (Phase 1)

This repository includes:

- TypeScript-first Next.js App Router architecture.
- Tailwind CSS baseline with global tokens and utility-ready styling.
- Framer Motion and Lucide setup for subtle motion and iconography.
- Vercel Analytics integration.
- CI quality gates for typecheck, lint, and build.
- Deployment-ready configuration for Vercel environments.

## Project Structure

```txt
platform-website/
├── app/
├── components/
├── content/
├── lib/
├── public/
├── styles/
├── .github/
├── next.config.js
├── package.json
└── tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — run locally
- `npm run typecheck` — TypeScript validation
- `npm run lint` — lint checks
- `npm run build` — production build
- `npm run start` — serve production build

## Environment

Copy `.env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`

## Deployment

Deploy to Vercel with preview deployments for pull requests and production deployments from `main`.
