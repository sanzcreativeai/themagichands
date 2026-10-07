import { SALON } from "@/lib/data";

export default function Visit() {
  const a = SALON.address;
  return (
    <section className="visit" id="visit">
      <div>
        <h3>Find us</h3>
        <p>
          {a.line1}<br />
          {a.line2}<br />
          {a.line3}<br />
          {a.city} {a.postcode}
        </p>
        <p style={{ marginTop: 16 }}>
          <a className="link-u" href={SALON.maps} target="_blank" rel="noopener noreferrer">
            Open in Google Maps &rarr;
          </a>
        </p>
      </div>

      <div>
        <h3>Call or message</h3>
        <a className="big" href={`tel:${SALON.phoneHref}`}>{SALON.phoneDisplay}</a>
        <p style={{ marginTop: 12 }}>
          Walk-ins welcome. For colour, texture and bridal, book ahead.
        </p>
      </div>

      <div>
        <h3>Hours <span className="todo">confirm</span></h3>
        <p>
          {SALON.hours.note}<br />
          {SALON.hours.opens} &mdash; {SALON.hours.closes}
        </p>
        <p style={{ marginTop: 16 }}>
          <a className="link-u" href={SALON.instagram} target="_blank" rel="noopener noreferrer">
            {SALON.instagramHandle} &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
