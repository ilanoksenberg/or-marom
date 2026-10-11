"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Muted looping video. With reduced motion it falls back to the still poster.
 * iPhone notes: React does not write the `muted` attribute into the HTML, and Safari only autoplays
 * when it is set, so it is set here in code. Low Power Mode blocks autoplay entirely, so the first
 * touch anywhere on the page starts playback as a fallback.
 */
export function BackdropVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    const events = ["touchend", "pointerdown", "click", "keydown"] as const;
    const stop = () => events.forEach((e) => window.removeEventListener(e, kick));
    const kick = () => {
      v.play().then(stop).catch(() => {});
    };
    v.play().catch(() => {
      events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
    });
    return stop;
  }, [reduce, src]);

  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" className={className} />;
  }
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
