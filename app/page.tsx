import Image from "next/image";
import Link from "next/link";
import Crest from "@/components/Crest";
import Reveal from "@/components/Reveal";
import AutoVideo from "@/components/AutoVideo";
import Counter from "@/components/Counter";
import ServiceIndex from "@/components/ServiceIndex";
import ColourRail from "@/components/ColourRail";
import MorphMark from "@/components/MorphMark";
import ScissorsRule from "@/components/Scissors";
import { BookButton } from "@/components/BookingBot";
import Visit from "@/components/Visit";
import Reviews from "@/components/Reviews";
import { SALON, SERVICES, STYLISTS, GROOMING, REELS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <div className="hero-l">
          <Crest variant="gold" draw priority sizes="(max-width: 920px) 140px, 190px" />
          <h1>
            <span className="ln"><span>This is where</span></span>
            <span className="ln"><span>the <em>magic</em></span></span>
            <span className="ln"><span>happens.</span></span>
          </h1>
          <p className="hero-sub">
            A unisex salon and training academy on Dr. Radha Krishnan Salai, Mylapore. Cutting, colour and
            texture work by stylists people have followed for ten years.
          </p>
          <div className="hero-cta">
            <BookButton />
            <Link className="btn" href="/colour">See the work</Link>
          </div>
        </div>

        <div className="hero-r">
          <div className="hero-tile span2">
            <AutoVideo src="/vid/curls-style.mp4" label="Styling curls at the salon" />
            <span className="cap">Curl styling</span>
          </div>
          <div className="hero-tile">
            <Image src="/img/colour-teal.jpg" alt="Teal and magenta peekaboo colour on a short bob" width={900} height={900} sizes="(max-width: 920px) 50vw, 24vw" />
            <span className="cap">Creative colour</span>
          </div>
          <div className="hero-tile">
            <Image src="/img/men-fade.jpg" alt="Men's mid fade with a shaved design line" width={800} height={800} sizes="(max-width: 920px) 50vw, 24vw" />
            <span className="cap">Fade &amp; line</span>
          </div>
        </div>
      </section>

      {/* ---------------- proof ---------------- */}
      <section className="proof">
        <div className="stat">
          <div className="n"><Counter to={SALON.reviewCount} suffix="+" /></div>
          <div className="l">Google reviews</div>
        </div>
        <div className="stat">
          <div className="n"><Counter to={10} suffix="+" /></div>
          <div className="l">Years in Mylapore</div>
        </div>
        <div className="stat proof-award">
          <AutoVideo src="/vid/award.mp4" label="The TNSA award trophy" />
          <div>
            <div className="n sm">TNSA Winner</div>
            <div className="l">Best Salon &amp; Spa</div>
          </div>
        </div>
        <div className="stat">
          <div className="n sm">Unisex</div>
          <div className="l">Salon &amp; Academy</div>
        </div>
      </section>

      {/* ---------------- the room ---------------- */}
      <section className="band">
        <Reveal className="band-img" mode="wipe">
          <Image
            src="/img/room-mirrors.jpg"
            alt="Backlit oval mirrors and styling chairs inside The Magic Hands salon in Mylapore, Chennai"
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
            you through. Customers keep reaching for the same word, unprompted: luxurious.
          </p>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="sec paper" id="services">
        <div className="head head-row">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 style={{ marginTop: 12 }}>The <em>index.</em></h2>
          </div>
          <Link className="link-u" href="/services">All services &rarr;</Link>
        </div>
        <ServiceIndex services={SERVICES} />
      </section>

      {/* ---------------- craft ---------------- */}
      <section className="sec ink-2">
        <div className="split narrow">
          <MorphMark />
          <div>
            <div className="head">
              <span className="eyebrow">The craft</span>
              <h2>Four hands,<br /><em>one head of hair.</em></h2>
            </div>
            <p className="lede">
              Nothing here is rushed through. A colour correction is not a forty-minute appointment, and we
              would rather tell you that before you sit down than halfway through.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- colour ---------------- */}
      <section className="sec">
        <div className="head head-row">
          <div>
            <span className="eyebrow">Colour</span>
            <h2 style={{ marginTop: 12 }}>The work we are<br /><em>known for.</em></h2>
          </div>
          <Link className="link-u" href="/colour">The colour book &rarr;</Link>
        </div>
        <ColourRail />
      </section>

      {/* ---------------- stylists ---------------- */}
      <section className="sec paper">
        <div className="head">
          <span className="eyebrow">The hands</span>
          <h2 style={{ marginTop: 12 }}>People ask for them<br /><em>by name.</em></h2>
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

      {/* ---------------- grooming ---------------- */}
      <section className="sec">
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
      </section>

      {/* ---------------- reels ---------------- */}
      <section className="sec ink-2">
        <div className="head">
          <span className="eyebrow">In the chair</span>
          <h2 style={{ marginTop: 12 }}>Shot on the floor,<br /><em>not in a studio.</em></h2>
        </div>
        <div className="grid-reels">
          {REELS.map((r) => (
            <div className="tile" key={r.src}>
              <AutoVideo src={r.src} label={r.label} />
              <span className="cap">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      <ScissorsRule />

      {/* ---------------- academy teaser ---------------- */}
      <section className="band rev">
        <Reveal className="band-img" mode="wipe">
          <Image
            src="/img/product-3tenx.jpg"
            alt="3TENX professional hair care range stocked at The Magic Hands"
            width={700} height={900}
            sizes="(max-width: 860px) 100vw, 45vw"
          />
        </Reveal>
        <div className="band-txt">
          <div className="head">
            <span className="eyebrow">The academy</span>
            <h2>Learn it on<br /><em>a live floor.</em></h2>
          </div>
          <p className="lede">
            We train inside the salon, with real clients and real timings, because a classroom will not teach
            you what to do when a colour lifts unevenly at six in the evening.
          </p>
          <div className="hero-cta">
            <Link className="btn solid" href="/academy">About the academy</Link>
          </div>
        </div>
      </section>

      <Reviews />
      <Visit />
    </>
  );
}
