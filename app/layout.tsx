import type { Metadata, Viewport } from "next";

/* Fonts are self-hosted from npm rather than fetched from Google at build
   time. next/font/google needs fonts.gstatic.com to be reachable during the
   build; when it is not — a firewalled runner, or a flaky moment on the CI
   box — the build still succeeds but silently ships system fallbacks. These
   packages ship the woff2 files, so the build has no network dependency and
   the typography cannot quietly go wrong. */
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";

import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import BookingBot from "@/components/BookingBot";
import JsonLd from "@/components/JsonLd";
import { EdgeRail, MobileBar } from "@/components/Contact";
import { SALON, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Magic Hands — Unisex Salon & Academy, Mylapore",
    template: "%s | The Magic Hands",
  },
  description:
    "Award-winning unisex salon and hairdressing academy on Dr. Radha Krishnan Salai, Mylapore, Chennai. Cutting, colour, smoothening, braiding, grooming and bridal styling.",
  keywords: [
    "unisex salon Mylapore",
    "salon in Mylapore Chennai",
    "hair colour Chennai",
    "hair smoothening Mylapore",
    "men's haircut Mylapore",
    "beauty academy Chennai",
    "hairdressing course Chennai",
    "bridal makeup Mylapore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SALON.name,
    title: "The Magic Hands — Unisex Salon & Academy, Mylapore",
    description:
      "TNSA award-winning unisex salon and academy in Mylapore, Chennai. This is where the magic happens.",
    url: SITE_URL,
    images: [{ url: "/img/room-mirrors.jpg", width: 1200, height: 630, alt: SALON.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Magic Hands — Unisex Salon & Academy, Mylapore",
    description: "TNSA award-winning unisex salon and academy in Mylapore, Chennai.",
    images: ["/img/room-mirrors.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
        <EdgeRail />
        <MobileBar />
        <BookingBot />
        <JsonLd />
      </body>
    </html>
  );
}
