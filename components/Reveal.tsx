"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/**
 * Blade-pass reveal. Anything already on screen at mount stays visible,
 * so the first painted frame is never blank.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  mode = "wipe",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  mode?: "wipe" | "up";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // Already in view on load — leave it visible, never animate it in.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setArmed(true);
    setShown(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            window.setTimeout(() => setShown(true), delay);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -5% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`${armed ? (mode === "up" ? "rvu" : "rv") : ""} ${className}`.trim()}
      data-in={shown ? "true" : "false"}
    >
      {children}
    </Tag>
  );
}
