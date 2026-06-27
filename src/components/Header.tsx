"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/music", label: "Music" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-forest)] text-[var(--color-cream)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[var(--color-amber)] flex items-center justify-center text-white font-display text-lg leading-none">
              FT
            </div>
            <span className="font-display text-2xl tracking-widest uppercase text-[var(--color-cream)] group-hover:text-[var(--color-butter)] transition-colors">
              Field Trip Crew
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-[var(--color-sage)] hover:text-[var(--color-butter)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="bg-[var(--color-amber)] text-white text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--color-cream)] hover:text-[var(--color-butter)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
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
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--color-forest-light)] py-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold uppercase tracking-widest text-[var(--color-sage)] hover:text-[var(--color-butter)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="inline-block bg-[var(--color-amber)] text-white text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
