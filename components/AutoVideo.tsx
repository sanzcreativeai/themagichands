"use client";

import { useEffect, useRef } from "react";

/**
 * Plays muted while on screen, pauses off screen, downloads only when near.
 *
 * The poster matters: without one a video is a black rectangle until the
 * first frame decodes, which on a dark page looks like a missing image.
 * Posters are generated from each clip's own first frame.
 */
export default function AutoVideo({
  src,
  className = "",
  label,
  poster,
}: {
  src: string;
  className?: string;
  label?: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  // /vid/curls-style.mp4 -> /img/poster-curls-style.jpg
  const posterSrc =
    poster ?? `/img/poster-${src.split("/").pop()!.replace(/\.mp4$/, "")}.jpg`;

  useEffect(() => {
    const v = ref.current;
    if (!v || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            if (v.preload === "none") {
              v.preload = "metadata";
              v.load();
            }
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={posterSrc}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
