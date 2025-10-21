# Scoops Creamery — Next.js (App Router) + Tailwind + TypeScript

A clean, pastel-themed **ice cream shop** website. Frontend-only. All content comes from a single JSON file.

## Features

- Next.js 14 App Router, React 18, TypeScript (strict), Tailwind CSS
- Single data source: `data/site.json`
- Pages: Home, Menu, Menu/[slug], About, Contact
- Accessible mobile drawer, semantic markup, visible focus states
- QR panel linking to `/menu` with **Download PNG**

## Quickstart

```bash
npm install
npm run dev
```

## Content Editing

Update text, nav, hero, flavors, about, contact, and footer year in **`/data/site.json`**.

## SEO

Open Graph & Twitter meta, `/app/sitemap.ts` and `/app/robots.ts` generated from `site.baseUrl`.

## Assets

Replace images under `/public`. Logo at `/public/logo/logo.png`.
