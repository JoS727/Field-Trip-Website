import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed — Field Trip Crew",
};

export default function CheckoutSuccessPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)] py-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[var(--color-forest)] flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[var(--color-sage)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-3">
          You&apos;re on the trip
        </p>
        <h1 className="font-display text-5xl uppercase text-[var(--color-forest)] mb-4">
          Order Confirmed
        </h1>
        <p className="text-[var(--color-muted)] mb-8">
          Thanks for supporting Field Trip Crew! You&apos;ll receive a confirmation
          email shortly. Your gear will ship in 3–5 business days.
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
            className="border-2 border-[var(--color-forest)] text-[var(--color-forest)] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
