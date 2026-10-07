import Image from "next/image";

/**
 * The real logo. A conic mask sweeps it on like the ring is being drawn,
 * then a gold foil highlight passes across the shape itself.
 */
export default function Crest({
  variant = "gold",
  draw = false,
  float = false,
  className = "",
  priority = false,
  sizes = "200px",
}: {
  variant?: "gold" | "light";
  draw?: boolean;
  float?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const src = variant === "gold" ? "/img/logo-gold.png" : "/img/logo-light.png";

  return (
    <span
      className={`crest${draw ? " draw" : ""}${float ? " float" : ""} ${className}`}
      style={{ ["--foil-src" as string]: `url(${src})` }}
    >
      <Image
        src={src}
        alt="The Magic Hands Unisex Salon &amp; Academy"
        width={900}
        height={874}
        priority={priority}
        sizes={sizes}
        style={{ width: "100%", height: "auto" }}
      />
      <span className="foil" aria-hidden="true" />
    </span>
  );
}
