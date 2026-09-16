// Cloudflare Pages Function: POST /api/checkout
// Creates a multi-item Stripe Checkout Session for the Field Trip merch cart.
// Payment: Stripe. Fulfillment: Printful (via Stripe metadata + existing pipeline).
//
// Requires env var STRIPE_SECRET_KEY (set as a Pages project secret) with
// Checkout Sessions write + Prices read scope. Reads from env only — the key
// never appears in source. Populate ALLOWED_PRICES once the Field Trip Stripe
// products/prices exist.

// Server-side allowlist of valid price IDs. Guards against a client submitting
// an arbitrary/forged price. TODO: replace with the real Field Trip price IDs
// once they're created in Stripe (one per design+attire combo, or per garment
// type with design in metadata).
const ALLOWED_PRICES = new Set([
  // 'price_...', // add real Field Trip price IDs here
]);

const JSON_HEADERS = { 'Content-Type': 'application/json' };

export async function onRequestPost({ request, env }) {
  try {
    if (!env.STRIPE_SECRET_KEY) {
      return json({ error: 'Checkout is not configured yet. Please try again shortly.' }, 500);
    }

    let body;
    try {
      body = await request.json();
    } catch (_) {
      return json({ error: 'Invalid request body' }, 400);
    }

    const items = Array.isArray(body.items) ? body.items : [];
    if (items.length === 0) {
      return json({ error: 'Your cart is empty' }, 400);
    }

    // Build Stripe line_items from allowlisted price IDs. Until the real price
    // IDs exist, reject rather than risk a forged price.
    const lineItems = [];
    for (const it of items) {
      const priceId = it.priceId;
      if (!priceId || !ALLOWED_PRICES.has(priceId)) {
        return json({ error: 'That item is not available for checkout yet.' }, 400);
      }
      lineItems.push({ price: priceId, quantity: Math.min(Math.max(it.qty || 1, 1), 100) });
    }

    const form = new URLSearchParams();
    form.append('mode', 'payment');
    const origin = new URL(request.url).origin;
    form.append('success_url', origin + '/merch.html?success=1&session_id={CHECKOUT_SESSION_ID}');
    form.append('cancel_url', origin + '/merch.html?canceled=1');
    form.append('shipping_address_collection[allowed_countries][0]', 'US');
    // Carry the design/garment/size through so Printful can fulfill the right
    // item. Stripe metadata is the hand-off to the fulfillment pipeline.
    form.append('metadata[store]', 'fieldtrip');
    form.append('metadata[fulfiller]', 'printful');
    form.append('metadata[cart]', JSON.stringify(items).slice(0, 450));
    lineItems.forEach((li, n) => {
      form.append(`line_items[${n}][price]`, li.price);
      form.append(`line_items[${n}][quantity]`, String(li.quantity));
    });

    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    });
    const data = await resp.json();
    if (!resp.ok) {
      return json({ error: (data && data.error && data.error.message) || 'Stripe error' }, 502);
    }
    return json({ url: data.url });
  } catch (e) {
    return json({ error: 'Unexpected checkout error' }, 500);
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}
