import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-amber)] flex items-center justify-center text-white font-display text-xl leading-none">
                FT
              </div>
              <span className="font-display text-3xl tracking-widest uppercase text-[var(--color-cream)]">
                Field Trip Crew
              </span>
            </Link>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
              A music collective rooted in creativity, community, and the joy of
              exploration. Always taking the scenic route.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/fieldtripcrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--color-muted)] hover:text-[var(--color-amber)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://soundcloud.com/fieldtripcrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoundCloud"
                className="text-[var(--color-muted)] hover:text-[var(--color-amber)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.175 12.225c-.017 0-.034.004-.052.004L0 12.23v-.005c0-.003.001-.006.001-.01C.001 8.945 2.67 6.25 5.962 6.25c.444 0 .88.05 1.302.14.408-3.6 3.45-6.39 7.12-6.39 3.95 0 7.147 3.2 7.147 7.148 0 .3-.02.596-.056.885C22.89 8.37 24 9.67 24 11.22c0 1.78-1.446 3.226-3.226 3.226H1.175c-.648 0-1.175-.527-1.175-1.175 0-.648.527-1.046 1.175-1.046z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="text-[var(--color-muted)] hover:text-[var(--color-amber)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="font-display text-lg tracking-widest uppercase text-[var(--color-amber)] mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/music", label: "Music" },
                { href: "/events", label: "Events" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-lg tracking-widest uppercase text-[var(--color-amber)] mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@fieldtripcrew.com"
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                >
                  hello@fieldtripcrew.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:booking@fieldtripcrew.com"
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                >
                  booking@fieldtripcrew.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:press@fieldtripcrew.com"
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                >
                  press@fieldtripcrew.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-muted)]/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} Field Trip Crew. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
