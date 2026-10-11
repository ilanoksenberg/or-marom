"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

/** Messages from patients. The page holds still while they change as you scroll. */
export function QuoteStory({ intro, quotes }: { intro: string; quotes: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setIdx(Math.min(quotes.length - 1, Math.max(0, Math.floor(v * quotes.length)))),
  );

  if (reduce) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 md:px-10">
        <h2 className="text-3xl md:text-5xl">{intro}</h2>
        <div className="mt-12 space-y-12">
          {quotes.map((q) => (
            <blockquote key={q} className="text-2xl leading-snug md:text-4xl">
              {q}
            </blockquote>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ height: `${(quotes.length + 1) * 75}svh` }} className="relative">
      <div className="sticky top-0 flex h-svh flex-col justify-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="max-w-[26ch] text-xl text-muted md:text-2xl">{intro}</h2>
          <div className="relative mt-10 min-h-[22rem] md:mt-14 md:min-h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                className="text-[1.9rem] leading-[1.28] md:text-[3.4rem] md:leading-[1.2]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              >
                {quotes[idx]}
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center gap-3" aria-hidden>
            {quotes.map((_, i) => (
              <span
                key={i}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === idx ? "w-14 bg-sun" : "w-6 bg-cream/25"
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-base text-muted">הודעה שאור קיבלה אחרי טיפול</p>
        </div>
      </div>
    </div>
  );
}
