import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop — Field Trip Crew",
  description:
    "Official Field Trip Crew merch. Tees, hats, hoodies, vinyl, and more.",
};

const categories = [
  { value: "all", label: "All" },
  { value: "tee", label: "Tees" },
  { value: "hoodie", label: "Hoodies" },
  { value: "hat", label: "Hats" },
  { value: "vinyl", label: "Vinyl" },
  { value: "accessory", label: "Accessories" },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-amber)] text-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
            Official Merch
          </p>
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-wider text-white">
            The
            <br />
            Shop
          </h1>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter row */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shipping info */}
      <section className="py-16 bg-[var(--color-forest)] text-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "📦",
                title: "Ships in 3–5 Days",
                body: "Orders are packed and shipped within 3 business days.",
              },
              {
                icon: "🌍",
                title: "Ships Worldwide",
                body: "We send gear everywhere the music travels.",
              },
              {
                icon: "🔄",
                title: "Easy Returns",
                body: "Not the right fit? Returns within 30 days, no questions asked.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="font-display text-xl uppercase tracking-wide text-[var(--color-butter)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-sage)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
