import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Field Trip Crew",
  description:
    "Field Trip Crew — a music collective rooted in creativity, community, and good vibes. Music, merch, events, and more.",
  openGraph: {
    title: "Field Trip Crew",
    description:
      "A music collective rooted in creativity, community, and good vibes.",
    type: "website",
    url: "https://fieldtripcrew.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Trip Crew",
    description:
      "A music collective rooted in creativity, community, and good vibes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
