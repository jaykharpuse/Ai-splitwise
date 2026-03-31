# Splitr by Jay Kharpuse

Splitr is a modern expense-splitting app that helps friends and groups track shared spending, settle balances, and stay on top of who owes who.

## Features
- Group expense tracking with flexible splits
- Balances dashboard and settlement flow
- Monthly insights and payment reminders (Inngest + Gemini)
- Email notifications via Resend
- Clerk authentication and Convex backend

## Tech Stack
- Next.js 15 (App Router), React 19
- Convex (database + serverless functions)
- Clerk (auth)
- Inngest (background jobs)
- Resend (email)
- Tailwind CSS 4 + Radix UI

## Getting Started
1) Install dependencies
```bash
npm install
```

2) Configure environment variables
```bash
cp .env.example .env.local
```
Fill the values in `.env.local`.

3) Start Convex locally
```bash
npx convex dev
```

4) Run the app
```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables
Required:
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CLERK_JWT_ISSUER_DOMAIN`
- `NEXT_PUBLIC_CONVEX_URL`
- `RESEND_API_KEY`
- `GEMINI_API_KEY`

## Background Jobs (Inngest)
This app uses scheduled jobs for reminders and monthly insights. Configure Inngest in production and point it to:
- `https://<your-domain>/api/inngest`

For local development, use the Inngest dev server and the local endpoint.

## Deployment (Vercel)
1) Push the repo to GitHub.
2) Import the project in Vercel.
3) Add the env vars from `.env.example` in Vercel.
4) Set the production `NEXT_PUBLIC_APP_URL` to your Vercel domain.
5) Deploy.

## Scripts
- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint checks

## Credits
Built and maintained by Jay Kharpuse.
