# ORIGYN Website

Production-ready website foundation for the ORIGYN platform, built with Next.js App Router.

## Technical Foundation (Phase 1)

This repository now includes:

- Scalable Next.js project structure (`app`, `components`, `lib`, `styles`, `content`).
- App Router baseline with metadata, loading, error, and not-found boundaries.
- CI quality gates for lint + build.
- Deployment-ready configuration for Vercel environments.
- Security-focused response headers in `next.config.js`.

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
└── jsconfig.json
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — run locally
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — lint checks

## Environment

Copy `.env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`

## Deployment

Deploy to Vercel with:

- Preview deployments for pull requests.
- Production deployments from `main`.

Set environment variables independently in Development, Preview, and Production.
