"use client";

import { useState } from "react";

interface BuyButtonProps {
  productId: string;
  size?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export default function BuyButton({
  productId,
  size,
  label = "Buy Now",
  className = "",
  disabled = false,
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (disabled) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, size }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to start checkout");
      }

      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading || disabled}
        className={`bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-amber-light)] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Redirecting...
          </span>
        ) : (
          label
        )}
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
