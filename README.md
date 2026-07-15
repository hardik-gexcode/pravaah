# PRAVAAH — AI-Driven Cash Flow & Risk Intelligence for Rural Micro Enterprises

Prototype built for the **NABARD Hackathon @ Global FinTech Fest 2026**
(Team PRAVAAH — Hardik Gupta, Mishika Sharma, Makshita Saini, Hanish Jain · JECRC Foundation, Jaipur)
Live- https://pravaah-iota.vercel.app
## What this is

A single-page product site that doubles as the working prototype demo:

- **Live scoring demo** (`#demo`) — five real mock enterprise profiles (dairy, poultry, food
  processing, handicrafts, retail). Selecting one genuinely recomputes the PRAVAAH Score, the
  liquidity/market/climate risk bars, and the 6-month forecast chart from `src/data/content.ts`.
- **Udyami App mockup** (phone frame) and **Field Officer Console mockup** (portfolio table with
  a clickable, live-updating enterprise detail panel) under `#interfaces`.
- A custom cursor with a soft gold particle trail, a Three.js hero scene (four translucent
  ribbons converging into one current — the "confluence" visual for PRAVAAH), Lenis smooth
  scroll, and GSAP ScrollTrigger reveals throughout.

All data is mocked per the hackathon's stated constraint ("use of mock or simulated datasets").

## Stack

React 19 + TypeScript + Vite, Tailwind CSS v4, Three.js, GSAP + ScrollTrigger, Lenis, Recharts,
lucide-react.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # outputs to dist/
npm run preview    # sanity-check the production build locally
```

Deploy `dist/` to Vercel (or any static host) — zero server-side code, no environment variables
needed. For Vercel: `vercel --prod` from this folder, or connect the GitHub repo and it will
auto-detect the Vite build.

## Editing content

Almost all copy and mock data lives in `src/data/content.ts` — sector profiles, forecast numbers,
risk scores, section copy. Update there rather than in the components.

## Design language

Warm, light, editorial palette (cream/sand background, navy headers, gold + terracotta accents,
Fraunces display serif + Public Sans body + IBM Plex Mono for data) — deliberately avoids a dark
"tech dashboard" look, matching the print-style deck.
