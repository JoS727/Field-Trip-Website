import Link from "next/link";
import type { Product } from "@/types";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-amber)] transition-colors"
    >
      {/* Image area */}
      <div className="aspect-square bg-[var(--color-butter)]/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-8xl text-[var(--color-amber)]/20 select-none">
            FTC
          </span>
        </div>
        {product.soldOut && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="font-display text-2xl text-white tracking-widest uppercase rotate-[-12deg] border-4 border-white px-3 py-1">
              Sold Out
            </span>
          </div>
        )}
        {product.featured && !product.soldOut && (
          <div className="absolute top-3 left-3">
            <span className="bg-[var(--color-amber)] text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest font-semibold mb-1">
          {product.category}
        </p>
        <h3 className="font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-amber)] transition-colors mb-1">
          {product.name}
        </h3>
        <p className="font-display text-xl text-[var(--color-forest)]">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
