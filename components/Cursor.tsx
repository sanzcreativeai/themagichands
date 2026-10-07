"use client";

import { useEffect, useRef } from "react";

/** A gold dot that opens into scissors over anything clickable. */
export default function Cursor() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;

    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; };
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("a,button,.rail-card,.tile,.svc-row");
      el.dataset.hot = t ? "true" : "false";
    };

    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.translate = `${cx}px ${cy}px`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={ref} className="cur" viewBox="0 0 26 26" aria-hidden="true">
      <circle className="dot" cx="13" cy="13" r="3.2" />
      <g className="sx">
        <circle cx="7.5" cy="19" r="3" />
        <circle cx="18.5" cy="19" r="3" />
        <path d="M9.6 16.6 19 5.5M16.4 16.6 7 5.5" />
      </g>
    </svg>
  );
}
