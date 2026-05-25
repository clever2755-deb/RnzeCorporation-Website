# RNZE Corporation

Landing page distribusi aplikasi resmi RNZECORPORATION — bergaya Dreamworks: clean, corporate-premium, solid color.

## Run & Operate

- `pnpm --filter @workspace/rnze-landing run dev` — jalankan landing page (port dari $PORT)
- `pnpm run typecheck` — full typecheck
- `pnpm run build` — typecheck + build semua packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 19 + Vite 6
- Tailwind CSS v4 (via @tailwindcss/vite)
- Lucide React (icons)
- Wouter (routing)

## Where things live

- `artifacts/rnze-landing/src/pages/LandingPage.tsx` — halaman utama (header, hero, app grid, footer)
- `artifacts/rnze-landing/src/index.css` — tema warna korporat (navy #001E3C / #003478)

## Architecture decisions

- React + Vite (bukan Next.js) — arsitektur monorepo Replit tidak mendukung Next.js natively; Vite memberikan experience yang identik untuk static landing page
- Single-page app tanpa backend — tidak ada DB atau API yang dibutuhkan
- Tailwind CSS v4 via @tailwindcss/vite plugin

## Product

Landing page download aplikasi korporat RNZECORPORATION dengan:
- Header sticky putih bersih
- Hero section cinematic navy blue dengan tombol ghost Dreamworks-style
- Grid katalog 6 aplikasi (1 kolom mobile, 3 kolom desktop)
- Footer biru korporat (#003478) dengan navigasi dan 5 ikon sosial media

## User preferences

- Gaya visual Dreamworks: solid color, corporate-premium, BEBAS glow/neon/animasi berlebihan
- Semua teks navigasi ALL-CAPS dengan letter-spacing renggang
- Responsif sempurna desktop dan Android

## Gotchas

- Warna utama: Navy #001E3C (teks/aksen gelap), #003478 (footer & primary button)
- Semua ikon sosial sudah terhubung ke URL resmi yang diberikan user
