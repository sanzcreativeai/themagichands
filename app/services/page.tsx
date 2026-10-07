import type { Metadata } from "next";
import Image from "next/image";
import ServiceIndex from "@/components/ServiceIndex";
import ScissorsRule from "@/components/Scissors";
import Reveal from "@/components/Reveal";
import Visit from "@/components/Visit";
import { BookButton } from "@/components/BookingBot";
import { SERVICES, GROOMING } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Cutting, Colour, Texture & Bridal",
  description:
    "Haircutting, colour, smoothening, braiding, men's grooming and bridal styling at The Magic Hands Unisex Salon in Mylapore, Chennai. Pricing confirmed before your appointment.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="sec flush-b">
        <div className="head">
          <span className="eyebrow">Services</span>
          <h2 style={{ marginTop: 12 }}>Everything we do,<br /><em>and what it involves.</em></h2>
        </div>
        <p className="lede">
          Pricing varies by hair length and condition, so we quote before you come in rather than printing a
          number we would have to argue about later. Message us and we will tell you what it costs.
        </p>
      </section>

      <section className="sec">
        <ServiceIndex services={SERVICES} />
      </section>

      <ScissorsRule />

      <section className="sec paper">
        <div className="head">
          <span className="eyebrow">Men&rsquo;s grooming</span>
          <h2 style={{ marginTop: 12 }}>Fades, beards,<br /><em>and a sharp line.</em></h2>
        </div>
        <div className="grid-tiles">
          {GROOMING.map((g) => (
            <Reveal key={g.title} className="tile" mode="wipe">
              <Image src={g.image} alt={g.alt} width={800} height={1000} sizes="(max-width: 700px) 50vw, 30vw" />
              <figcaption>{g.title}</figcaption>
            </Reveal>
          ))}
        </div>
        <div className="hero-cta" style={{ marginTop: 28 }}>
          <BookButton>Book an appointment</BookButton>
        </div>
      </section>

      <Visit />
    </>
  );
}
