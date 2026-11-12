import Image from "next/image";
import { asset } from "../asset";

/**
 * Or Marom's own logo (sage on cream). The tagline under it is real text rather than part of the
 * image, so it stays readable at any size; the header shows the logo without it.
 */
export function Logo({ className = "h-12", tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <span className="inline-flex flex-col items-center">
      <Image
        src={asset("/images/logo-color-notag.webp")}
        alt="אור מרום"
        width={360}
        height={260}
        priority
        className={`w-auto ${className}`}
      />
      {tagline && (
        <span className="mt-2 text-base tracking-[0.12em] text-muted">עיסוי רפואי | טיפול בגישה הוליסטית</span>
      )}
    </span>
  );
}
