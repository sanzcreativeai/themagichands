"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/**
 * Blade-pass reveal.
 *
 * Visible is the resting state: `data-in` is only ever set to "false" once
 * this component has armed an element AND attached a live observer to it.
 * If the observer never fires, a failsafe un-hides it. Nothing here can
 * leave content permanently invisible, which is exactly what went wrong
 * when the reveal defaulted to hidden.
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
  const [state, setState] = useState<"open" | "armed">("open");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // Already on screen at mount — leave it alone, never animate the first paint.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;

    setState("armed");

    const show = () => setState("open");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          if (delay) window.setTimeout(show, delay);
          else show();
        });
      },
      // threshold 0 plus a generous bottom margin: fires the moment any part
      // of the element approaches the viewport, rather than waiting for 16%
      // of a tall image to clear the fold.
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );

    io.observe(el);

    // Belt and braces: if the observer somehow never fires, show it anyway.
    const failsafe = window.setTimeout(show, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`${mode === "up" ? "rvu" : "rv"} ${className}`.trim()}
      data-in={state === "armed" ? "false" : "true"}
    >
      {children}
    </Tag>
  );
}
