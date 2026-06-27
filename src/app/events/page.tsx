import type { Metadata } from "next";
import { getUpcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events — Field Trip Crew",
  description:
    "Upcoming shows and events from Field Trip Crew. Grab your tickets.",
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] text-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            On The Road
          </p>
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-wider text-[var(--color-cream)]">
            Shows &
            <br />
            <span className="text-[var(--color-amber)]">Events</span>
          </h1>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-4xl uppercase text-[var(--color-forest)] mb-4">
                More Dates Coming Soon
              </p>
              <p className="text-[var(--color-muted)]">
                Sign up for our mailing list to be the first to know.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingEvents.map((event) => {
                const date = new Date(event.date);
                return (
                  <article
                    key={event.id}
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-amber)] transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Date block */}
                      <div className="flex-shrink-0 w-20 text-center border-r border-[var(--color-border)] pr-6">
                        <p className="font-display text-4xl text-[var(--color-amber)] leading-none">
                          {date.getDate()}
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mt-1">
                          {date.toLocaleDateString("en-US", { month: "short" })}
                        </p>
                        <p className="text-xs text-[var(--color-muted)]">
                          {date.getFullYear()}
                        </p>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h2 className="font-display text-2xl uppercase text-[var(--color-forest)] mb-1">
                          {event.title}
                        </h2>
                        <p className="text-sm font-semibold text-[var(--color-charcoal)] mb-1">
                          {event.venue}
                        </p>
                        <p className="text-sm text-[var(--color-muted)]">
                          {event.city} &nbsp;·&nbsp; {event.time}
                        </p>
                        {event.description && (
                          <p className="text-sm text-[var(--color-muted)] mt-2 max-w-xl">
                            {event.description}
                          </p>
                        )}
                      </div>

                      {/* Ticket CTA */}
                      <div className="flex-shrink-0">
                        {event.soldOut ? (
                          <span className="border-2 border-[var(--color-muted)] text-[var(--color-muted)] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full text-sm">
                            Sold Out
                          </span>
                        ) : event.ticketUrl ? (
                          <a
                            href={event.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-5 py-2.5 rounded-full text-sm hover:bg-[var(--color-amber-light)] transition-colors whitespace-nowrap"
                          >
                            Get Tickets →
                          </a>
                        ) : (
                          <span className="text-sm text-[var(--color-muted)] font-semibold">
                            Free Entry
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-[var(--color-forest)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl uppercase text-[var(--color-cream)] mb-4">
            Book Field Trip Crew
          </h2>
          <p className="text-[var(--color-sage)] mb-8 max-w-md mx-auto">
            Want to bring us to your city, venue, or festival? Let&apos;s make it
            happen.
          </p>
          <a
            href="mailto:booking@fieldtripcrew.com"
            className="inline-block bg-[var(--color-amber)] text-white font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[var(--color-amber-light)] transition-colors"
          >
            Contact for Booking
          </a>
        </div>
      </section>
    </>
  );
}
