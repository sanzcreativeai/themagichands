import type { Metadata, Viewport } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import BookingBot from "@/components/BookingBot";
import JsonLd from "@/components/JsonLd";
import { EdgeRail, MobileBar } from "@/components/Contact";
import { SALON, SITE_URL } from "@/lib/data";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

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
    <html lang="en-IN" className={`${jost.variable} ${cormorant.variable}`}>
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
