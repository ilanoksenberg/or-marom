"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Logo } from "./Logo";

export function Header({ bookingUrl }: { bookingUrl: string }) {
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid ? "border-b border-line bg-bg/75 backdrop-blur-md" : "border-b border-transparent"
      }`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="אור מרום, לראש הדף">
          <Logo />
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sun !min-h-11 !px-5 !text-base"
        >
          לקביעת תור
          <ArrowLeft size={18} weight="bold" aria-hidden />
        </a>
      </div>
    </motion.header>
  );
}
