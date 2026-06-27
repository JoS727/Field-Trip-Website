export interface Product {
  id: string;
  name: string;
  price: number; // in cents
  description: string;
  image: string;
  category: "tee" | "hat" | "hoodie" | "accessory" | "vinyl";
  sizes?: string[];
  stripePriceId?: string;
  featured?: boolean;
  soldOut?: boolean;
}

export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string; // ISO date string
  time: string;
  ticketUrl?: string;
  description?: string;
  featured?: boolean;
  soldOut?: boolean;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  links?: {
    instagram?: string;
    soundcloud?: string;
    spotify?: string;
  };
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  year: string;
  type: "EP" | "LP" | "Single" | "Mixtape";
  image: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  soundcloudUrl?: string;
  featured?: boolean;
}
