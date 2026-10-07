"use client";

import { useEffect, useRef } from "react";

/** Plays muted while on screen, pauses off screen, never downloads until near. */
export default function AutoVideo({
  src,
  className = "",
  label,
}: {
  src: string;
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            if (v.preload === "none") { v.preload = "metadata"; v.load(); }
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
