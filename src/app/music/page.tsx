import type { Metadata } from "next";
import { releases, members } from "@/lib/crew";

export const metadata: Metadata = {
  title: "Music — Field Trip Crew",
  description:
    "Stream and download music from Field Trip Crew. Available on Spotify, Apple Music, SoundCloud, and more.",
};

export default function MusicPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            Discography
          </p>
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-wider text-[var(--color-cream)]">
            The
            <br />
            <span className="text-[var(--color-amber)]">Music</span>
          </h1>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release) => (
              <article
                key={release.id}
                className="bg-[var(--color-surface)] rounded-3xl overflow-hidden border border-[var(--color-border)] group hover:border-[var(--color-amber)] transition-colors"
              >
                {/* Cover art placeholder */}
                <div className="aspect-square bg-[var(--color-forest)] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-amber)] flex items-center justify-center mb-4">
                      <span className="font-display text-white text-xl">FT</span>
                    </div>
                    <h3 className="font-display text-2xl text-[var(--color-cream)] uppercase tracking-wider text-center leading-tight">
                      {release.title}
                    </h3>
                    <p className="text-[var(--color-sage)] text-sm mt-2 text-center">
                      {release.artist}
                    </p>
                  </div>
                  {release.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[var(--color-amber)] text-white text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)]">
                      {release.type}
                    </span>
                    <span className="text-xs text-[var(--color-muted)]">
                      {release.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-[var(--color-charcoal)] mb-0.5">
                    {release.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] mb-4">
                    {release.artist}
                  </p>

                  {/* Stream links */}
                  <div className="flex flex-wrap gap-2">
                    {release.spotifyUrl && (
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1DB954] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full hover:brightness-110 transition"
                      >
                        Spotify
                      </a>
                    )}
                    {release.appleMusicUrl && (
                      <a
                        href={release.appleMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FC3C44] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full hover:brightness-110 transition"
                      >
                        Apple
                      </a>
                    )}
                    {release.soundcloudUrl && (
                      <a
                        href={release.soundcloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF5500] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full hover:brightness-110 transition"
                      >
                        SoundCloud
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-20 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            The Artists
          </p>
          <h2 className="font-display text-5xl uppercase text-[var(--color-cream)] mb-12">
            Crew Members
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {members.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-forest)] border-2 border-[var(--color-amber)]/30 flex items-center justify-center mb-3">
                  <span className="font-display text-xl text-[var(--color-amber)]">
                    {member.name[0]}
                  </span>
                </div>
                <p className="text-sm font-bold text-[var(--color-cream)]">
                  {member.name}
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl uppercase text-[var(--color-forest)] mb-4">
            Sync &amp; Licensing
          </h2>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
            Interested in using Field Trip Crew music for film, TV, ads, or
            games? We&apos;d love to talk.
          </p>
          <a
            href="mailto:press@fieldtripcrew.com"
            className="inline-block bg-[var(--color-forest)] text-[var(--color-cream)] font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[var(--color-forest-light)] transition-colors"
          >
            Licensing Inquiries
          </a>
        </div>
      </section>
    </>
  );
}
