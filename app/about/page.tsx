import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import AutoVideo from "@/components/AutoVideo";
import ScissorsRule from "@/components/Scissors";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Crest from "@/components/Crest";
import { STYLISTS, SALON } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Award-winning Unisex Salon in Mylapore",
  description:
    "The Magic Hands is a TNSA award-winning unisex salon and academy on Dr. Radha Krishnan Salai, Mylapore, Chennai, founded by senior hairstylists Syed Irfan and Prashanth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="sec">
        <div className="split narrow">
          <Crest variant="gold" float sizes="(max-width: 860px) 160px, 300px" />
          <div>
            <div className="head">
              <span className="eyebrow">About</span>
              <h2>A salon that<br /><em>people stay with.</em></h2>
            </div>
            <p className="lede">
              The Magic Hands is a unisex salon and training academy on Dr. Radha Krishnan Salai in Mylapore,
              founded and run by two senior hairstylists. The work ranges from a ten-minute trim to a full
              day of colour correction, and the academy trains the next set of stylists on the same floor.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              In {SALON.reviewCount}+ Google reviews, the thing customers mention most is not a technique.
              It is that they keep coming back to the same person, year after year.
            </p>
          </div>
        </div>
      </section>

      {/* award */}
      <section className="sec ink-2">
        <div className="split">
          <div>
            <div className="head">
              <span className="eyebrow">Recognition</span>
              <h2>TNSA Winner,<br /><em>Best Salon &amp; Spa.</em></h2>
            </div>
            <p className="lede">
              The Magic Hands was named Best Salon &amp; Spa at the Tamil Nadu Startup Awards, judged against
              salons across the state.
            </p>
          </div>
          <div className="grid-reels" style={{ maxWidth: 280 }}>
            <div className="tile">
              <AutoVideo src="/vid/award.mp4" label="The TNSA award trophy" />
              <span className="cap">TNSA trophy</span>
            </div>
          </div>
        </div>
      </section>

      <ScissorsRule />

      {/* founders */}
      <section className="sec paper flush-t">
        <div className="head">
          <span className="eyebrow">The hands</span>
          <h2>Founders, and<br /><em>still on the floor.</em></h2>
        </div>
        <div className="hands">
          {STYLISTS.map((s) => (
            <Reveal key={s.name} className="hand" mode="up">
              <h3>{s.name}</h3>
              <div className="role">{s.role}</div>
              <p>{s.blurb}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* the room */}
      <section className="band flip">
        <Reveal className="band-img" mode="wipe">
          <Image
            src="/img/room-mirrors.jpg"
            alt="Backlit oval mirrors and styling chairs at The Magic Hands, Mylapore"
            width={1200} height={470}
            sizes="(max-width: 860px) 100vw, 55vw"
          />
        </Reveal>
        <div className="band-txt">
          <div className="head">
            <span className="eyebrow">The room</span>
            <h2>Warm light,<br /><em>long mirrors.</em></h2>
          </div>
          <p className="lede">
            Backlit ovals against dark wood, chairs with room between them, and a wash station nobody rushes
            you through.
          </p>
        </div>
      </section>

      <Reviews />
      <Visit />
    </>
  );
}
