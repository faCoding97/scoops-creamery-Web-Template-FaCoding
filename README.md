# Scoops Creamery — Next.js 14 + Tailwind + TypeScript

A clean brochure site for **Scoops.elixflare.com** (Port Elizabeth / Gqeberha), built with **Next.js 14 (App Router)**, **React 18**, **Tailwind 3**, and **TypeScript**. Data (theme, copy, menu, prices, contact, map) is sourced from a single JSON file.

> **Note:** You may see a **"Next.js outdated"** warning. This is expected due to **pinned versions** and can be ignored.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3030
```

## Minimal Navbar Rule (3–4 items)

Only 3–4 links are rendered, even if more exist in `data/site.json`:
- Home → `/`
- Menu (All Flavors) → `/menu`
- About → `/about` (optional)
- Contact → `#contact` (preferred on Home)

Extras in JSON are **ignored**.

## Client vs Server

- Any component using React hooks or DOM events lives in its own `*.client.tsx` file with `'use client'` on **line 1**.
- Server components must not import hooks or browser-only APIs.
- In this build, widgets like Carousel, Reveal, MapEmbed, QrCode, Toast, Modal and the Header are client components.

## Edit Content & Theme

Open **`data/site.json`** and adjust:

- `theme`: brand, accent, background, foreground colors (CSS variables)
- `layout`: section spacing, hero height
- `nav`: labels & hrefs (only first 3–4 render)
- `hero.slides`: headline, copy and images
- `valueProps`, `features`, `testimonials`, `faq`: lists
- `menu`: items with category, ZAR price, tags, allergens, description, image
- `contact`: phone, whatsapp, email, address, `mapQuery`, `mapEmbedSrc`
- `routes.menuRoot`: QR code and buttons point here

## Replace Images / Favicon / Logo

- Put images under `public/` (e.g. `public/images/...`).
- Replace `public/logo/logo.png` with your logo.
- Replace `public/favicon.ico` (must exist and is referenced in `app/manifest.json`). The included file is a PNG payload saved with `.ico` extension, which modern browsers accept; you can replace it with a true `.ico` if you prefer.

## SEO

- `metadataBase` is set to `https://scoops.elixflare.com`.
- Includes canonical, OG/Twitter images, `/robots.txt`, `/sitemap.xml`, and `app/manifest.json`.

## Lighthouse Targets

- Performance ≥ 90
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO ≥ 90

Test using Chrome DevTools Lighthouse. Check with throttling and mobile/desktop.

## Allergen Disclaimer

We prepare with care, but **traces of milk, eggs, gluten, soy, or nuts may remain** as we use shared equipment.
