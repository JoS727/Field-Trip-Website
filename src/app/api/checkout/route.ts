import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, size } = body as { productId: string; size?: string };

    if (!productId) {
      return NextResponse.json(
        { error: "Missing productId" },
        { status: 400 }
      );
    }

    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (product.soldOut) {
      return NextResponse.json(
        { error: "This product is sold out" },
        { status: 400 }
      );
    }

    // Dynamically import stripe only in server context to avoid exposing the
    // secret key initialisation error during static builds / tests.
    const stripe = (await import("@/lib/stripe")).default;

    const origin = request.headers.get("origin") ?? "https://fieldtripcrew.com";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: [
                product.description,
                size ? `Size: ${size}` : undefined,
              ]
                .filter(Boolean)
                .join(" | "),
              metadata: {
                productId: product.id,
                category: product.category,
              },
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        productId: product.id,
        ...(size ? { size } : {}),
      },
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "NL", "SE", "NO", "DK"],
      },
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/cancel`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
