import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, products } from "@/lib/products";
import ProductPurchase from "@/components/ProductPurchase";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Not Found — Field Trip Crew" };
  return {
    title: `${product.name} — Field Trip Crew Shop`,
    description: product.description,
  };
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <>
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-10">
            <Link href="/shop" className="hover:text-[var(--color-amber)] transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-[var(--color-charcoal)]">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product image */}
            <div className="aspect-square bg-[var(--color-forest)] rounded-3xl relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[var(--color-amber)] flex items-center justify-center mb-6">
                  <span className="font-display text-white text-3xl">FTC</span>
                </div>
                <p className="font-display text-4xl text-[var(--color-cream)] uppercase tracking-wider text-center px-8">
                  {product.name}
                </p>
              </div>
              {product.soldOut && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="font-display text-3xl text-white tracking-widest uppercase rotate-[-12deg] border-4 border-white px-4 py-2">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="py-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                {product.category}
              </p>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-forest)] leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-display text-4xl text-[var(--color-charcoal)] mb-6">
                {formatPrice(product.price)}
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Interactive size selector + checkout */}
              <ProductPurchase
                productId={product.id}
                sizes={product.sizes}
                soldOut={product.soldOut}
              />

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-[var(--color-border)] grid grid-cols-3 gap-4 text-center">
                {[
                  { icon: "🔒", label: "Secure Checkout" },
                  { icon: "📦", label: "Ships in 3–5 Days" },
                  { icon: "🔄", label: "30-Day Returns" },
                ].map((badge) => (
                  <div key={badge.label}>
                    <p className="text-xl mb-1">{badge.icon}</p>
                    <p className="text-xs text-[var(--color-muted)] font-semibold">
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
