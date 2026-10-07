"use client";

import Image from "next/image";
import { useState } from "react";
import type { Service } from "@/lib/data";

export default function ServiceIndex({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<string | null>(services[0]?.no ?? null);
  const [hover, setHover] = useState<string | null>(services[0]?.no ?? null);
  const active = hover ?? open ?? services[0]?.no;

  return (
    <div className="svc-layout">
      <div className="svc">
        {services.map((s) => {
          const isOpen = open === s.no;
          return (
            <button
              key={s.no}
              className="svc-row"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : s.no)}
              onMouseEnter={() => setHover(s.no)}
              onFocus={() => setHover(s.no)}
              onMouseLeave={() => setHover(null)}
              type="button"
            >
              <span className="svc-top">
                <span className="svc-no">{s.no}</span>
                <span className="svc-name">{s.name}</span>
                <span className="svc-tag">{s.tag}</span>
              </span>
              <span className="svc-body">
                <div><p>{s.blurb}</p></div>
              </span>
            </button>
          );
        })}
      </div>

      <div className="svc-preview" aria-hidden="true">
        {services.map((s) => (
          <Image
            key={s.no}
            src={s.image}
            alt=""
            fill
            sizes="(max-width: 900px) 0px, 34vw"
            data-on={active === s.no}
          />
        ))}
      </div>
    </div>
  );
}
