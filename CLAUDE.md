# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A React + Vite showcase site for "DIEU EST MON PROTECTEUR" (DEMP), a Togo-based seller of African pagnes/tissus (fabrics). Frontend-only, no backend — this was scaffolded via Google AI Studio (see `metadata.json`, `.aistudio/`) and uses `@google/genai` for Gemini API access. All product/collection/testimonial data is currently static/mock (`src/data/mockData.ts`) — there is no real API layer yet.

## Commands

- `npm run dev` — start Vite dev server on port 3000
- `npm run build` — production build (`vite build`)
- `npm run preview` — preview the production build
- `npm run lint` — type-check only (`tsc --noEmit`); there is no separate linter (no ESLint config) and no test suite configured
- `npm run clean` — remove `dist` and `server.js`

Package manager: `bun.lock` is present but `package-lock.json` also exists — check which is actually in use before adding dependencies; prefer whichever lockfile is already committed to avoid drift.

## Environment

Runtime config comes from env vars documented in `.env.example`:
- `GEMINI_API_KEY` — required for Gemini API calls, injected by AI Studio at runtime from user secrets (not meant to be committed)
- `APP_URL` — injected by AI Studio with the Cloud Run service URL

Vite dev server disables HMR/file-watching when `DISABLE_HMR=true` (used by the AI Studio agent environment to avoid flicker during automated edits) — don't remove this behavior in `vite.config.ts`.

## Architecture

- **Routing**: `src/App.tsx` defines all routes via `react-router-dom`'s `createBrowserRouter`, nested under `MainLayout` (`src/components/layout/MainLayout.tsx`), which renders `Header` + `<Outlet />` + `Footer` + a floating `WhatsAppButton` on every page. Add new pages by creating a component in `src/pages/` and registering it as a child route in `App.tsx`.
- **Data layer**: everything (company info, collections, products, testimonials) lives in `src/data/mockData.ts`, typed by `src/types/index.ts` (`Product`, `Collection`, `Testimonial`, `Company`). Product images are imported directly from `src/assets/images/` and bundled by Vite — there is no CMS/API call. Swapping in a real backend later means replacing the exports of `mockData.ts` while keeping the same shapes.
- **Path alias**: `@/*` maps to the project root (configured in both `tsconfig.json` and `vite.config.ts`), so imports like `@/src/...` work from anywhere.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — v4 uses CSS-based config; check `src/index.css` for `@theme`/custom tokens). Utility class merging goes through `cn()` in `src/lib/utils.ts` (clsx + tailwind-merge) — use this instead of raw string concatenation when combining conditional classes.
- **Client-only state**: `src/hooks/useVisitorCounter.ts` fakes a visitor counter using `localStorage` (no backend) — the comment in that file notes a real app would call an API; keep that pattern in mind if similar "looks dynamic but isn't" features are added.
- **Fonts**: Google Fonts (Cormorant Garamond, Manrope) are loaded via `<link>` tags in `index.html`, not self-hosted.
