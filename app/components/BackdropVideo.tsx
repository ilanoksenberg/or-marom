"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Muted looping video. With reduced motion it falls back to the still poster.
 * - `lazy`: nothing is downloaded until the video is close to the screen (for videos far down the page).
 * - iPhone: React does not write the `muted` attribute into the HTML, and Safari only autoplays
 *   when it is set, so it is set here in code. Low Power Mode blocks autoplay entirely, so the first
 *   touch anywhere on the page starts playback as a fallback.
 */
export function BackdropVideo({
  src,
  poster,
  className = "",
  lazy = false,
}: {
  src: string;
  poster: string;
  className?: string;
  lazy?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(!lazy);

  // Lazy videos start downloading only when they are about to scroll into view.
  useEffect(() => {
    if (!lazy || reduce || active) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, reduce, active]);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce || !active) return;
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
  }, [reduce, src, active]);

  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" className={className} loading="lazy" />;
  }
  return (
    <video
      ref={ref}
      className={className}
      src={active ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={lazy ? "none" : "auto"}
      aria-hidden
    />
  );
}
