"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thanh tiến trình cuộn ở đỉnh trang (framer-motion useScroll). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="no-print fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary to-primary/40"
    />
  );
}
