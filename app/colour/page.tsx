import type { Metadata } from "next";
import Image from "next/image";
import ColourRail from "@/components/ColourRail";
import AutoVideo from "@/components/AutoVideo";
import Reveal from "@/components/Reveal";
import ScissorsRule from "@/components/Scissors";
import Visit from "@/components/Visit";
import { BookButton } from "@/components/BookingBot";
import { COLOUR_WORK, REELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hair Colour in Mylapore — Melts, Balayage & Creative Colour",
  description:
    "Global colour, balayage, burgundy melts, peekaboo panels and bold creative colour at The Magic Hands, Mylapore, Chennai. Book a colour consultation on WhatsApp.",
  alternates: { canonical: "/colour" },
};

export default function ColourPage() {
  return (
    <>
      <section className="sec flush-b">
        <div className="head">
          <span className="eyebrow">Colour</span>
          <h2>The work we are<br /><em>known for.</em></h2>
        </div>
        <p className="lede">
          Global colour and root touch-ups, balayage, and the creative work that fills our feed: burgundy
          melts through curls, teal and magenta panels, and bold colour on short hair. Every colour starts
          with a conversation about what your hair will actually hold.
        </p>
      </section>

      <section className="sec">
        <ColourRail />
      </section>

      <section className="sec ink-2">
        <div className="split">
          <div>
            <div className="head">
              <span className="eyebrow">Before you book</span>
              <h2>Colour takes<br /><em>the time it takes.</em></h2>
            </div>
            <p className="lede">
              A correction or a lift on previously coloured hair can run several hours, and we would rather
              tell you that up front than halfway through. Send us a photo of your hair as it is now and the
              look you want, and we will tell you honestly what is reachable in one sitting.
            </p>
            <div className="hero-cta">
              <BookButton>Book a colour consultation</BookButton>
            </div>
          </div>
          <div className="grid-reels">
            {REELS.slice(0, 2).map((r) => (
              <div className="tile" key={r.src}>
                <AutoVideo src={r.src} label={r.label} />
                <span className="cap">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScissorsRule />

      <section className="sec paper flush-t">
        <div className="grid-tiles">
          {COLOUR_WORK.map((c) => (
            <Reveal key={c.title} className="tile" mode="wipe">
              <Image src={c.image} alt={c.alt} width={700} height={875} sizes="(max-width: 700px) 50vw, 25vw" />
              <figcaption>{c.title}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <Visit />
    </>
  );
}
