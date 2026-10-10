# Abdul Rehman — Portfolio Website

Premium personal portfolio website for Abdul Rehman. Built with the Next.js
App Router, TypeScript (strict), Tailwind CSS v4 (CSS-first), Three.js 3D
visuals, Framer Motion animations, and a Prisma + PostgreSQL data layer with a
Resend-powered contact form.

## Stack

| Layer        | Technology                                                              |
| ------------ | ----------------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router, TypeScript)                                     |
| UI           | React 19, Tailwind CSS v4, Framer Motion, Lucide icons                  |
| 3D           | Three.js, @react-three/fiber, @react-three/drei                         |
| Forms        | React Hook Form + Zod + @hookform/resolvers                             |
| Email        | Resend                                                                  |
| Database     | Prisma 7 + PostgreSQL                                                   |
| Quality      | ESLint (flat config), Prettier, `tsc --noEmit`, Vitest + Testing Library |
| Hosting      | Vercel                                                                  |

## Prerequisites

- Node.js **>= 20**
- npm (bundled with Node)
- A PostgreSQL database (Neon, Supabase, or any hosted Postgres)
- A Resend API key (free tier works) — https://resend.com/api-keys

## Getting started

```bash
# 1. Clone the repo and enter it
git clone <your-repo-url> abdul-rehman-portfolio
cd abdul-rehman-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# then edit .env and fill in:
#   NEXT_PUBLIC_SITE_URL, RESEND_API_KEY, DATABASE_URL, NEXT_PUBLIC_GA_ID

# 4. Generate the Prisma client (also runs automatically on postinstall)
npx prisma generate

# 5. Create the database tables (first time only)
npx prisma migrate dev --name init

# 6. Start the dev server
npm run dev
# → http://localhost:3000
```

## Commands

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the development server                  |
| `npm run build`       | Production build                               |
| `npm start`           | Serve the production build                    |
| `npm run lint`        | Run ESLint over the project                   |
| `npm run format`      | Format everything with Prettier               |
| `npm run typecheck`   | Type-check with `tsc --noEmit`                |
| `npm test`            | Run the Vitest suite (`vitest run`)           |
| `npm run prisma:generate` | Regenerate the Prisma client              |

## Environment variables

| Variable               | Required | Purpose                                                        |
| ---------------------- | -------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Public site URL — canonical links, sitemap, Open Graph         |
| `RESEND_API_KEY`       | Yes      | Sends contact-form emails via Resend                           |
| `DATABASE_URL`         | Yes      | PostgreSQL connection string for Prisma                        |
| `NEXT_PUBLIC_GA_ID`    | No       | Google Analytics 4 measurement ID (leave empty to disable)    |

## Deploy to Vercel (5 minutes)

1. **Push to GitHub** — commit this repo and push it to a GitHub repository.
2. **Import in Vercel** — go to https://vercel.com → **Add New… → Project** →
   **Import** your repository.
3. **Set environment variables** — during import (or later under
   **Settings → Environment Variables**), add:
   - `NEXT_PUBLIC_SITE_URL` — your final domain, e.g. `https://abdulrehman.dev`
   - `RESEND_API_KEY`
   - `DATABASE_URL`
   - `NEXT_PUBLIC_GA_ID` (optional)
4. **Deploy** — click **Deploy**. Vercel builds with `npm run build` and the
   Prisma client is generated automatically via the `postinstall` hook.
5. **Add your custom domain** — Vercel project → **Settings → Domains** → add
   your domain, then point DNS at Vercel:
   - **Apex (root) domain:** add an `A` record → `76.76.21.21`
   - **Subdomain (www):** add a `CNAME` record → `cname.vercel-dns.com`
   - Vercel verifies the records and issues the certificate for you.

Notes:

- **Preview deployments** — every pull request gets its own live preview URL
  automatically, so changes can be reviewed before merging to production.
- **HTTPS is automatic** — Vercel provisions and renews TLS certificates for
  all domains at no extra cost; no manual certificate work needed.
- **Database** — point `DATABASE_URL` at a hosted Postgres (e.g. Neon or
  Supabase) and run `npx prisma migrate deploy` against it before the first
  production deploy so tables exist.
