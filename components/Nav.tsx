"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Crest from "./Crest";
import { BookButton } from "./BookingBot";
import { SALON } from "@/lib/data";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/colour", label: "Colour" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="nav">
      <Link href="/" className="nav-mark" aria-label={`${SALON.shortName}, home`}>
        <Crest variant="gold" sizes="40px" />
        <b>{SALON.shortName}</b>
      </Link>

      <nav className="nav-links" data-open={open} aria-label="Main">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} data-active={pathname === l.href}>
            {l.label}
          </Link>
        ))}
        <a href={SALON.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>

      <div className="nav-cta">
        <BookButton className="btn solid">Book</BookButton>
        <button
          className="burger"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
