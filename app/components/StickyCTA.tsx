"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";

/** Phone only: once the hero is behind you, booking stays one tap away. */
export function StickyCTA({ href }: { href: string }) {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 640));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-4 bottom-4 z-40 md:hidden"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sun w-full shadow-[0_14px_30px_-12px_rgb(53_25_47_/_0.6)]"
          >
            לקביעת תור
            <ArrowLeft size={20} weight="bold" aria-hidden />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
