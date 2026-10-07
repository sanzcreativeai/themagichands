"use client";

import Image from "next/image";
import { useRef } from "react";
import { COLOUR_WORK } from "@/lib/data";

export default function ColourRail() {
  const ref = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ down: false, x: 0, left: 0 });

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft };
    el.classList.add("drag");
    el.setPointerCapture(e.pointerId);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };

  const onUp = () => {
    drag.current.down = false;
    ref.current?.classList.remove("drag");
  };

  return (
    <div
      className="rail"
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      {COLOUR_WORK.map((c) => (
        <div className="rail-card" key={c.title}>
          <figure>
            <Image src={c.image} alt={c.alt} width={620} height={827} sizes="(max-width: 700px) 76vw, 310px" />
            <figcaption>
              <h3>{c.title}</h3>
              <span>{c.tag}</span>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
