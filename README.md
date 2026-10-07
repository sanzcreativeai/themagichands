# The Magic Hands — Unisex Salon & Academy

Next.js 15 (App Router) site for The Magic Hands, Mylapore, Chennai.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Fonts

Jost and Cormorant Garamond are **self-hosted from npm** (`@fontsource/*`),
not fetched from Google at build time.

This matters. `next/font/google` downloads the woff2 files during the build,
and when `fonts.gstatic.com` is unreachable — a firewalled runner, or just a
bad moment on the CI box — the build still *succeeds* and silently ships
system fallbacks. The site then looks subtly wrong and nothing tells you.
The first Vercel deploy of this project hit exactly that. Self-hosting
removes the network dependency, so the typography cannot quietly go wrong.

If you ever change a font, add the matching `@fontsource` package and import
its weight files in `app/layout.tsx` — don't reach for `next/font/google`.

## Deploy

Push to GitHub, import the repo on Vercel, done. No environment variables.
Point the domain at the project once you have it, then change `SITE_URL` in
`lib/data.ts` from the placeholder to the real domain so canonicals, the
sitemap and Open Graph tags are correct.

## Where to change things

Almost everything the client will want edited lives in **`lib/data.ts`** —
phone number, address, hours, services, stylists, courses, reviews, gallery
items. Edit there, not in the components.

### Still to confirm before launch

Two spots are marked with a gold `confirm` chip on the page itself:

1. **Opening hours** — `SALON.hours` in `lib/data.ts`, currently a placeholder
   of 10:00–21:00 daily. This also feeds the opening hours in the schema, so
   fix both by fixing the one value.
2. **Academy course duration, fees and intake dates** — `app/academy/page.tsx`.

## Pages

| Route       | Purpose                                              |
|-------------|------------------------------------------------------|
| `/`         | Home — hero, proof, services, colour, stylists, reels |
| `/services` | Full service index plus men's grooming               |
| `/colour`   | Colour work, what to expect, gallery                 |
| `/academy`  | Training courses, how it is taught, enquiry          |
| `/about`    | Story, TNSA award, founders, reviews                 |

Each page sets its own title, description and canonical.

## Booking concierge

`components/BookingBot.tsx`. A guided flow — service, who for, when, stylist,
name, number — that composes the enquiry and hands it to WhatsApp. No backend,
no API key, no running cost, and it cannot say anything wrong.

Open it from anywhere with `<BookButton />`, or call `openBooking("academy")`
to start on the academy branch.

## Google reviews widget

`components/Reviews.tsx` has an empty `<div id="reviews-widget" />` above the
hand-set reviews. Paste the Trustindex or Elfsight embed inside it when the
client's Google Business Profile is connected. The hand-set reviews stay
underneath as a fallback, so the section is never empty if the script fails.

The reviews are **not** marked up as `aggregateRating` on purpose — Google
treats self-hosted markup of reviews you collected as self-serving and it can
draw a manual penalty. Credibility comes from the count and the link out.

## SEO

- Metadata API per route, Open Graph and Twitter cards (so WhatsApp shares
  render a proper card)
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
- JSON-LD in `components/JsonLd.tsx`: `HairSalon` with the full address, hours,
  award and service catalogue, plus a separate `EducationalOrganization` for
  the academy — a second ranking surface most salon sites miss

## Assets

All photos and video in `public/` came from the client's phone and are
WhatsApp-compressed. They are used at sizes that suit their real resolution —
vertical video is displayed at phone proportions so it is never upscaled.

If a proper shoot happens, replace the files in `public/img` keeping the same
names and nothing else needs touching. Priorities for that shoot: the interior
with the lights on and no balloons, portraits of Syed Irfan and Prashanth,
hands-and-scissors detail shots, the academy mid-class, and paired before/after
shots for colour — before/afters were left out because there are no "before"
photos.

## Motion

All CSS and vanilla JS, no animation library. Everything respects
`prefers-reduced-motion`. Anything on screen at load stays visible — only
below-the-fold elements animate in, so the first paint is never blank.
