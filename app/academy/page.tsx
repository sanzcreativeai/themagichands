import type { Metadata } from "next";
import Image from "next/image";
import MorphMark from "@/components/MorphMark";
import ScissorsRule from "@/components/Scissors";
import Visit from "@/components/Visit";
import { BookButton } from "@/components/BookingBot";
import { COURSES, SALON } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hairdressing Academy in Chennai — Cutting, Colour & Styling Courses",
  description:
    "Professional hairdressing training in Mylapore, Chennai. Cutting, colour, styling and supervised salon floor practice with live clients at The Magic Hands Academy.",
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return (
    <>
      <section className="band">
        <div className="band-img">
          <Image
            src="/img/room-mirrors.jpg"
            alt="The training floor at The Magic Hands Academy, Mylapore"
            width={1200} height={470}
            sizes="(max-width: 860px) 100vw, 55vw"
            priority
          />
        </div>
        <div className="band-txt">
          <div className="head">
            <span className="eyebrow">The academy</span>
            <h2>Learn it on<br /><em>a live floor.</em></h2>
          </div>
          <p className="lede">
            We train inside the salon, with real clients and real timings, because a classroom will not teach
            you what to do when a colour lifts unevenly at six in the evening.
          </p>
        </div>
      </section>

      <section className="sec paper">
        <div className="split narrow">
          <div>
            <div className="head">
              <span className="eyebrow">What you learn</span>
              <h2>Four parts,<br /><em>one trade.</em></h2>
            </div>
            <ul className="courses">
              {COURSES.map((c) => (
                <li key={c.no}>
                  <b>{c.no}</b>
                  <span><strong>{c.name}</strong>{c.detail}</span>
                </li>
              ))}
            </ul>
            <p className="lede" style={{ marginTop: 20, fontSize: 13 }}>
              Course duration, fees and intake dates <span className="todo">confirm</span>
            </p>
            <div className="hero-cta">
              <BookButton intent="academy">Enquire about the academy</BookButton>
            </div>
          </div>

          <div>
            <div className="img-fill">
              <Image
                src="/img/craft-cut.jpg"
                alt="A stylist working on a client at The Magic Hands"
                width={800} height={1000}
                sizes="(max-width: 860px) 100vw, 46vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ScissorsRule />

      <section className="sec ink-2">
        <div className="split">
          <MorphMark />
          <div>
            <div className="head">
              <span className="eyebrow">How we teach</span>
              <h2>Watch it,<br /><em>then do it.</em></h2>
            </div>
            <p className="lede">
              Demonstration first, then supervised practice on live heads, then the floor. You finish knowing
              how a working salon runs, not just how a technique looks on a mannequin.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Call <a className="link-u" href={`tel:${SALON.phoneHref}`}>{SALON.phoneDisplay}</a> to ask about
              the next intake.
            </p>
          </div>
        </div>
      </section>

      <Visit />
    </>
  );
}
