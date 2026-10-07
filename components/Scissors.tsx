/**
 * The scissors lifted out of the logo's A, reused as a motif.
 * Blades open on hover of a parent .sciss-rule, or when given .snip.
 */
export function ScissorsMark({ size = 30, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg
      className="sciss"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g className="blade l">
        <path d="M34 10 L56 62" />
        <circle cx="30" cy="78" r="11" />
        <path d="M38 68 L30 78" />
      </g>
      <g className="blade r">
        <path d="M66 10 L44 62" />
        <circle cx="70" cy="78" r="11" />
        <path d="M62 68 L70 78" />
      </g>
      <circle cx="50" cy="60" r="2.6" fill={stroke} stroke="none" />
    </svg>
  );
}

/** A section divider: hairline, scissors, hairline. */
export default function ScissorsRule({ size = 30 }: { size?: number }) {
  return (
    <div className="sciss-rule" aria-hidden="true">
      <span className="ln" />
      <ScissorsMark size={size} />
      <span className="ln r" />
    </div>
  );
}
