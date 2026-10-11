"use client";

import { useRef } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";

function Word({
  children,
  progress,
  range,
  reduce,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduce: boolean | null;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity: reduce ? 1 : opacity }} className="me-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

/** A sentence that lights up word by word as the page scrolls past it. */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.82", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={`${w}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1.6) / words.length > 1 ? 1 : (i + 1.6) / words.length]}
          reduce={reduce}
        >
          {w}
        </Word>
      ))}
    </p>
  );
}
