import Link from "next/link";
import Crest from "./Crest";
import { SALON } from "@/lib/data";

export default function Footer() {
  const a = SALON.address;
  return (
    <footer className="foot">
      <Crest variant="gold" float sizes="150px" />
      <p className="tag">{SALON.tagline}</p>

      <nav aria-label="Footer">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/colour">Colour</Link>
        <Link href="/academy">Academy</Link>
        <Link href="/about">About</Link>
        <a href={SALON.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>

      <p className="fine">
        {a.line1}, {a.line3}, {a.city} {a.postcode}
        <br />
        <a href={`tel:${SALON.phoneHref}`}>{SALON.phoneDisplay}</a> &middot; {SALON.award}
        <br />
        &copy; {new Date().getFullYear()} {SALON.name}
      </p>
    </footer>
  );
}
