/** Or Marom wordmark: a small sun (or means light), the Hebrew name, and the Latin name beneath. */
export function SunMark({ size = 34, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden className="shrink-0">
      <g className={spin ? "sun-rays" : undefined} stroke="var(--color-sun)" strokeWidth="1.8" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const long = i % 2 === 0;
          const r1 = 14;
          const r2 = long ? 19 : 17;
          return (
            <line
              key={i}
              x1={(20 + Math.sin(a) * r1).toFixed(2)}
              y1={(20 - Math.cos(a) * r1).toFixed(2)}
              x2={(20 + Math.sin(a) * r2).toFixed(2)}
              y2={(20 - Math.cos(a) * r2).toFixed(2)}
            />
          );
        })}
      </g>
      <circle cx="20" cy="20" r="8.2" fill="var(--color-sun)" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="אור מרום, Or Marom">
      <SunMark spin />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.75rem] font-medium tracking-tight">אור מרום</span>
        <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-muted" dir="ltr">
          Or Marom
        </span>
      </span>
    </span>
  );
}
