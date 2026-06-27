import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Field Trip Crew",
};

export default function CheckoutCancelPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)] py-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[var(--color-charcoal)] flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[var(--color-muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-3">
          Checkout Cancelled
        </p>
        <h1 className="font-display text-5xl uppercase text-[var(--color-charcoal)] mb-4">
          No Worries
        </h1>
        <p className="text-[var(--color-muted)] mb-8">
          You cancelled the checkout. Your cart has been cleared. Head back to
          the shop whenever you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
          >
            Back to Shop
          </Link>
          <Link
            href="/"
            className="border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
