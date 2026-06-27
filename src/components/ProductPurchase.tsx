"use client";

import { useState } from "react";
import BuyButton from "@/components/BuyButton";

interface ProductPurchaseProps {
  productId: string;
  sizes?: string[];
  soldOut?: boolean;
}

export default function ProductPurchase({
  productId,
  sizes,
  soldOut,
}: ProductPurchaseProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    sizes && sizes.length > 0 ? undefined : undefined
  );

  const hasSizes = sizes && sizes.length > 0;
  const canBuy = !hasSizes || selectedSize !== undefined;

  if (soldOut) {
    return (
      <div>
        <button
          disabled
          className="bg-[var(--color-muted)]/30 text-[var(--color-muted)] font-bold uppercase tracking-widest px-8 py-4 rounded-full cursor-not-allowed"
        >
          Sold Out
        </button>
        <p className="text-sm text-[var(--color-muted)] mt-3">
          Sign up to be notified when this restocks.
        </p>
      </div>
    );
  }

  return (
    <div>
      {hasSizes && (
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-charcoal)] mb-3">
            Size{" "}
            {!selectedSize && (
              <span className="text-[var(--color-amber)] font-normal normal-case tracking-normal text-xs">
                — Please select a size
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Select a size">
            {sizes!.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                aria-pressed={selectedSize === size}
                className={`w-12 h-12 flex items-center justify-center border-2 rounded-lg text-sm font-bold transition-colors ${
                  selectedSize === size
                    ? "border-[var(--color-amber)] text-[var(--color-amber)] bg-[var(--color-amber)]/10"
                    : "border-[var(--color-border)] text-[var(--color-charcoal)] hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <BuyButton
        productId={productId}
        size={selectedSize}
        label="Buy Now"
        className={`text-base px-8 py-4 ${!canBuy ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!canBuy}
      />
    </div>
  );
}
