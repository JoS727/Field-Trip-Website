import type { Metadata } from "next";
import { members } from "@/lib/crew";

export const metadata: Metadata = {
  title: "About — Field Trip Crew",
  description:
    "Meet the Field Trip Crew — a music collective built on creativity, community, and good vibes.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            Who We Are
          </p>
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-wider text-[var(--color-cream)] mb-6">
            About the
            <br />
            <span className="text-[var(--color-amber)]">Crew</span>
          </h1>
          <p className="text-lg text-[var(--color-sage)] max-w-2xl">
            Field Trip Crew started as a shared studio, grew into a collective,
            and became a family. We&apos;re producers, MCs, DJs, visual artists, and
            community builders — united by a belief that music is better when
            everyone&apos;s invited on the trip.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
                Our Story
              </p>
              <h2 className="font-display text-5xl uppercase text-[var(--color-forest)] mb-6">
                The Trip Begins
              </h2>
              <div className="space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  It started with a borrowed van, a beat hard drive, and six
                  friends who refused to stop making music together. Field Trip
                  Crew was born out of late nights in practice spaces, popup
                  shows in living rooms, and a shared conviction that the best
                  art happens when you stop waiting for permission.
                </p>
                <p>
                  From our first tape to packed venues, we&apos;ve kept the same
                  spirit: take the scenic route, bring everyone with you, and
                  never forget why you started. Every release is a new
                  destination. Every show is a shared journey.
                </p>
                <p>
                  Based in Los Angeles and running everywhere, Field Trip Crew
                  is always in motion. The trip isn&apos;t over — it&apos;s just getting
                  started.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-forest)] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-display text-6xl text-[var(--color-amber)]/40">
                  FTC
                </span>
              </div>
              <div className="aspect-[3/4] bg-[var(--color-butter)] rounded-2xl flex items-center justify-center shadow-lg mt-8">
                <span className="font-display text-6xl text-[var(--color-forest)]/40">
                  2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-amber)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community First",
                body: "We build with and for the people around us. No gatekeeping. If you&apos;re here, you&apos;re on the trip.",
              },
              {
                title: "Always Moving",
                body: "Stagnation is the enemy of creativity. We keep exploring, experimenting, and taking detours.",
              },
              {
                title: "Make It Real",
                body: "We value craft, honesty, and follow-through. Good ideas become real things here.",
              },
            ].map((value) => (
              <div key={value.title} className="text-[var(--color-cream)]">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-cream)]" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            The People
          </p>
          <h2 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-forest)] mb-16">
            Meet the Crew
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-[var(--color-surface)] rounded-3xl overflow-hidden border border-[var(--color-border)] group"
              >
                {/* Avatar placeholder */}
                <div className="aspect-square bg-[var(--color-forest)] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--color-amber)] flex items-center justify-center mb-3">
                      <span className="font-display text-white text-2xl">
                        {member.name[0]}
                      </span>
                    </div>
                    <span className="font-display text-5xl text-[var(--color-cream)]/10 absolute bottom-4">
                      FTC
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-display text-2xl uppercase text-[var(--color-forest)] mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {member.links && (
                    <div className="flex gap-3">
                      {member.links.instagram && (
                        <a
                          href={member.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors"
                        >
                          IG
                        </a>
                      )}
                      {member.links.soundcloud && (
                        <a
                          href={member.links.soundcloud}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors"
                        >
                          SC
                        </a>
                      )}
                      {member.links.spotify && (
                        <a
                          href={member.links.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[var(--color-forest)] hover:text-[var(--color-amber)] transition-colors"
                        >
                          Spotify
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl md:text-6xl uppercase text-[var(--color-cream)] mb-4">
            Get In Touch
          </h2>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
            For booking, press, collaborations, or just to say what&apos;s good.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:booking@fieldtripcrew.com"
              className="bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Booking
            </a>
            <a
              href="mailto:press@fieldtripcrew.com"
              className="border-2 border-[var(--color-muted)] text-[var(--color-muted)] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:border-[var(--color-cream)] hover:text-[var(--color-cream)] transition-colors"
            >
              Press Inquiries
            </a>
            <a
              href="mailto:hello@fieldtripcrew.com"
              className="border-2 border-[var(--color-muted)] text-[var(--color-muted)] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:border-[var(--color-cream)] hover:text-[var(--color-cream)] transition-colors"
            >
              General
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
