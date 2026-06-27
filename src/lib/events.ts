import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "ftc-summer-2026-la",
    title: "Field Trip: Summer Edition",
    venue: "The Regent Theater",
    city: "Los Angeles, CA",
    date: "2026-07-19",
    time: "8:00 PM",
    ticketUrl: "https://dice.fm",
    description:
      "The crew comes home for a full night of music, art, and good energy. All original sets, surprise guests, and a late-night market.",
    featured: true,
  },
  {
    id: "ftc-chicago-2026",
    title: "Field Trip: Road Edition",
    venue: "Schubas Tavern",
    city: "Chicago, IL",
    date: "2026-08-02",
    time: "9:00 PM",
    ticketUrl: "https://dice.fm",
    description:
      "We're taking the trip to Chicago. Expect an intimate set, exclusive merch drop, and afterparty.",
    featured: true,
  },
  {
    id: "ftc-nyc-2026",
    title: "Field Trip: East Coast",
    venue: "Baby's All Right",
    city: "Brooklyn, NY",
    date: "2026-08-15",
    time: "9:00 PM",
    ticketUrl: "https://dice.fm",
  },
  {
    id: "ftc-pdx-2026",
    title: "Field Trip: Pacific",
    venue: "Mississippi Studios",
    city: "Portland, OR",
    date: "2026-09-05",
    time: "8:30 PM",
    ticketUrl: "https://dice.fm",
  },
  {
    id: "ftc-sf-2026",
    title: "Field Trip: Bay Area",
    venue: "The Chapel",
    city: "San Francisco, CA",
    date: "2026-09-20",
    time: "8:00 PM",
    ticketUrl: "https://dice.fm",
    featured: true,
  },
  {
    id: "ftc-atl-2026",
    title: "Field Trip: South Edition",
    venue: "The Loft",
    city: "Atlanta, GA",
    date: "2026-10-11",
    time: "9:00 PM",
    ticketUrl: "https://dice.fm",
  },
];

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.featured);
}
