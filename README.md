# Field Trip Crew Website

Official website for [fieldtripcrew.com](https://fieldtripcrew.com) — a music collective rooted in creativity, community, and good vibes.

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Stripe](https://stripe.com).

## Features

- **New Branding** — Retro-modern aesthetic with Field Trip Crew brand colors (forest green, amber, sage, butter yellow)
- **Music Page** — Discography with links to Spotify, Apple Music, and SoundCloud
- **Events Page** — Upcoming shows with ticket links
- **Shop** — Full merch catalog (tees, hats, hoodies, vinyl, accessories)
- **Stripe Checkout** — Secure payment flow via Stripe Checkout
- **Stripe Webhook** — Order fulfillment via `checkout.session.completed` events
- **Responsive** — Mobile-first design

## Getting Started

### 1. Clone & install

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your Stripe keys from [dashboard.stripe.com](https://dashboard.stripe.com).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

### Test Mode

1. Get your **Publishable Key** and **Secret Key** from [Stripe Dashboard → Developers → API keys](https://dashboard.stripe.com/test/apikeys)
2. Add them to `.env.local`

### Webhooks (Local Development)

Use the [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward events locally:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret it outputs and add it as `STRIPE_WEBHOOK_SECRET` in `.env.local`.

### Webhooks (Production)

In [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks), create an endpoint:
- **URL:** `https://fieldtripcrew.com/api/webhook`
- **Events:** `checkout.session.completed`, `payment_intent.payment_failed`

## Project Structure

```
src/
  app/
    page.tsx              # Home page
    about/page.tsx        # About / Meet the Crew
    events/page.tsx       # Upcoming shows
    music/page.tsx        # Discography
    shop/
      page.tsx            # Merch catalog
      [id]/page.tsx       # Product detail + Stripe checkout
      success/page.tsx    # Post-checkout success
      cancel/page.tsx     # Cancelled checkout
    api/
      checkout/route.ts   # Creates Stripe Checkout Session
      webhook/route.ts    # Handles Stripe webhook events
  components/
    Header.tsx            # Navigation header
    Footer.tsx            # Site footer
    ProductCard.tsx       # Merch card component
    BuyButton.tsx         # Stripe redirect button (client)
  lib/
    stripe.ts             # Stripe client singleton
    products.ts           # Product catalog data
    events.ts             # Events/shows data
    crew.ts               # Member profiles + releases
  types/
    index.ts              # TypeScript interfaces
```

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add the environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## Adding Products

Edit `src/lib/products.ts` to add or update products. Each product has:

- `id` — unique slug (used in URLs and Stripe metadata)
- `name` — display name
- `price` — price in **cents** (e.g. `3500` = $35.00)
- `description` — product description
- `category` — `tee | hat | hoodie | accessory | vinyl`
- `sizes` — optional array of available sizes
- `featured` — show on home page
- `soldOut` — disables the buy button

## License

MIT
