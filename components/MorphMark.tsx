"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  "Consultation — what you want, and what your hair will actually hold",
  "Prep, section and wash",
  "The work itself, at the pace it needs",
  "Finish, and how to keep it at home",
];

/** Gold line-art that cycles scissors → comb → strand → seal while in view. */
export default function MorphMark() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let timer: number | undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && timer === undefined) {
            timer = window.setInterval(() => setI((v) => (v + 1) % 4), 2200);
          } else if (!en.isIntersecting && timer !== undefined) {
            window.clearInterval(timer);
            timer = undefined;
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => { io.disconnect(); if (timer !== undefined) window.clearInterval(timer); };
  }, []);

  return (
    <div ref={ref} className="morph-wrap">
      <div className="morph-stage">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="84" opacity="0.2" />
          <g className="glyph" data-on={i === 0}>
            <path d="M78 56 L118 130" />
            <path d="M122 56 L82 130" />
            <circle cx="74" cy="142" r="11" />
            <circle cx="126" cy="142" r="11" />
          </g>
          <g className="glyph" data-on={i === 1}>
            <path d="M56 70 h88 a6 6 0 0 1 6 6 v12 h-100 v-12 a6 6 0 0 1 6 -6 z" />
            <path d="M56 88 v40M70 88 v40M84 88 v40M98 88 v40M112 88 v40M126 88 v40M140 88 v40" />
          </g>
          <g className="glyph" data-on={i === 2}>
            <path d="M100 38 C62 70 138 96 100 128 C74 150 114 160 100 174" />
            <path d="M86 44 C52 74 128 100 90 132" opacity="0.45" />
          </g>
          <g className="glyph" data-on={i === 3}>
            <circle cx="100" cy="100" r="56" />
            <circle cx="100" cy="100" r="45" opacity="0.5" />
            <path d="M85 95h30M91 112c0-6 4-9 9-9s9 3 9 9" />
          </g>
        </svg>
      </div>

      <ol className="morph-steps">
        {STEPS.map((s, n) => (
          <li key={s} data-on={i === n}>
            <b>{String(n + 1).padStart(2, "0")}</b>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
