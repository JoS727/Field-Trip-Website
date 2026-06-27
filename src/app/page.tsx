import Link from "next/link";
import { getFeaturedEvents } from "@/lib/events";
import { getFeaturedProducts } from "@/lib/products";
import { releases } from "@/lib/crew";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredEvents = getFeaturedEvents().slice(0, 3);
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const featuredRelease = releases.find((r) => r.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-forest)] text-[var(--color-cream)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-amber)]/20 border border-[var(--color-amber)]/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)]">
                Now Playing — Field Recordings Vol. 2
              </span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl leading-none uppercase tracking-wider mb-6 text-[var(--color-cream)]">
              Field
              <br />
              <span className="text-[var(--color-amber)]">Trip</span>
              <br />
              Crew
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-sage)] max-w-xl mb-10">
              A music collective rooted in creativity, community, and the joy of
              exploration. We make music, throw events, and take the scenic
              route — always.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/music"
                className="bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
              >
                Listen Now
              </Link>
              <Link
                href="/events"
                className="border-2 border-[var(--color-sage)] text-[var(--color-sage)] font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:border-[var(--color-cream)] hover:text-[var(--color-cream)] transition-colors"
              >
                Catch a Show
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative badge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-40 h-40 relative opacity-30">
            <div className="absolute inset-0 rounded-full border-[6px] border-[var(--color-butter)] border-dashed" />
            <div className="absolute inset-4 rounded-full bg-[var(--color-amber)]/20 flex items-center justify-center">
              <span className="font-display text-4xl text-[var(--color-butter)] tracking-wider">
                FTC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[var(--color-amber)] py-3 overflow-hidden">
        <p className="font-display text-white text-xl tracking-widest uppercase text-center px-4">
          Field Trip Crew &nbsp;·&nbsp; New Music Out Now &nbsp;·&nbsp; On Tour
          2026 &nbsp;·&nbsp; Shop the Drop
        </p>
      </div>

      {/* Latest Music */}
      {featuredRelease && (
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                  Latest Release
                </p>
                <h2 className="font-display text-6xl md:text-7xl uppercase leading-tight text-[var(--color-forest)] mb-4">
                  {featuredRelease.title}
                </h2>
                <p className="text-[var(--color-muted)] mb-2">
                  {featuredRelease.artist} — {featuredRelease.year}
                </p>
                <p className="text-sm text-[var(--color-muted)] mb-8">
                  {featuredRelease.type}
                </p>
                <div className="flex flex-wrap gap-4">
                  {featuredRelease.spotifyUrl && (
                    <a
                      href={featuredRelease.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1DB954] text-white font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full hover:brightness-110 transition"
                    >
                      Spotify
                    </a>
                  )}
                  {featuredRelease.appleMusicUrl && (
                    <a
                      href={featuredRelease.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FC3C44] text-white font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full hover:brightness-110 transition"
                    >
                      Apple Music
                    </a>
                  )}
                  {featuredRelease.soundcloudUrl && (
                    <a
                      href={featuredRelease.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF5500] text-white font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full hover:brightness-110 transition"
                    >
                      SoundCloud
                    </a>
                  )}
                </div>
                <div className="mt-6">
                  <Link
                    href="/music"
                    className="text-sm font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors underline underline-offset-4"
                  >
                    View all releases →
                  </Link>
                </div>
              </div>
              {/* Album art placeholder */}
              <div className="aspect-square max-w-md mx-auto w-full bg-[var(--color-forest)] rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--color-amber)] flex items-center justify-center mb-6 shadow-lg">
                    <span className="font-display text-white text-3xl">FT</span>
                  </div>
                  <h3 className="font-display text-3xl text-[var(--color-cream)] uppercase tracking-wider text-center px-6">
                    {featuredRelease.title}
                  </h3>
                  <p className="text-[var(--color-sage)] text-sm mt-2">
                    {featuredRelease.artist}
                  </p>
                </div>
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      {featuredEvents.length > 0 && (
        <section className="py-24 bg-[var(--color-charcoal)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                  On The Road
                </p>
                <h2 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-cream)]">
                  Upcoming Shows
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden sm:block text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] hover:text-[var(--color-butter)] transition-colors"
              >
                All Shows →
              </Link>
            </div>

            <div className="space-y-4">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[var(--color-muted)]/20 rounded-2xl px-6 py-5 hover:border-[var(--color-amber)]/40 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center min-w-[56px]">
                      <p className="font-display text-3xl text-[var(--color-amber)] leading-none">
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] uppercase tracking-wide">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-cream)] mb-0.5">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {event.venue} — {event.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-[var(--color-muted)]">
                      {event.time}
                    </p>
                    {event.ticketUrl && (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--color-amber)] text-white text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-[var(--color-amber-light)] transition-colors whitespace-nowrap"
                      >
                        Get Tickets
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <Link
                href="/events"
                className="text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] hover:text-[var(--color-butter)] transition-colors"
              >
                All Shows →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Shop Preview */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                The Drop
              </p>
              <h2 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-forest)]">
                Shop The Gear
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:block text-sm font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors"
            >
              Full Shop →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/shop"
              className="text-sm font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors"
            >
              Full Shop →
            </Link>
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section className="py-24 bg-[var(--color-butter)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-forest)] mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-6xl md:text-7xl uppercase text-[var(--color-forest)] leading-tight mb-6">
              Pack Your Bags
            </h2>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed mb-10">
              Field Trip Crew is a music collective built on the idea that
              creativity thrives in community. We make music, build culture, and
              invite everyone along for the ride. Every show is a field trip.
              Every release is a postcard from somewhere new.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[var(--color-forest)] text-[var(--color-cream)] font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[var(--color-forest-light)] transition-colors"
            >
              Meet the Crew
            </Link>
          </div>
        </div>
      </section>

      {/* Mailing list */}
      <section className="py-20 bg-[var(--color-forest)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-3">
            Stay In The Loop
          </p>
          <h2 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-cream)] mb-4">
            Join the Mailing List
          </h2>
          <p className="text-[var(--color-sage)] mb-8 max-w-md mx-auto">
            New drops, tour dates, and exclusive content — straight to your
            inbox. No noise.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[var(--color-forest-light)] text-[var(--color-cream)] placeholder:text-[var(--color-muted)] border border-[var(--color-sage)]/30 rounded-full px-5 py-3 text-sm outline-none focus:border-[var(--color-amber)] transition-colors"
            />
            <button
              type="submit"
              className="bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-amber-light)] transition-colors whitespace-nowrap"
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
