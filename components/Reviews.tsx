import { REVIEWS, SALON } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="sec paper" id="reviews">
      <div className="head head-row">
        <div>
          <span className="eyebrow">{SALON.reviewCount}+ reviews on Google</span>
          <h2>In their <em>words.</em></h2>
        </div>
        <a className="link-u" href={SALON.googleReviews} target="_blank" rel="noopener noreferrer">
          Read all on Google &rarr;
        </a>
      </div>

      {/*
        Live review widget mounts here on the production domain.
        Paste the Trustindex / Elfsight embed inside this div and the
        hand-set reviews below stay as the fallback if the script fails.
      */}
      <div id="reviews-widget" />

      <div className="rev-grid">
        {REVIEWS.map((r) => (
          <figure className={`rev${r.lead ? " lead" : ""}`} key={r.name}>
            <div className="stars" aria-label={`${r.stars} out of 5 stars`}>
              {"★".repeat(r.stars)}
            </div>
            <blockquote style={{ margin: 0 }}>
              <p>&ldquo;{r.text}&rdquo;</p>
            </blockquote>
            <figcaption className="who">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
