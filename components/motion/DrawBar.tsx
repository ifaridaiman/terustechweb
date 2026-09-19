"use client";

import { motion, useReducedMotion } from "motion/react";

import { EASE_SOFT } from "./Reveal";

interface DrawBarProps {
  /** "mount" for the hero headline underline; "inView" for the 30-days crossbar. */
  trigger?: "mount" | "inView";
  duration?: number;
  delay?: number;
  className?: string;
}

/** An accent bar that draws left-to-right, used for the hero underline and the 30-days crossbar. */
export function DrawBar({ trigger = "inView", duration = 0.9, delay = 0, className = "" }: DrawBarProps) {
  const reduceMotion = useReducedMotion() ?? false;

  if (reduceMotion) {
    return <div className={`origin-left ${className}`} style={{ transform: "scaleX(1)" }} />;
  }

  const transition = { duration, delay, ease: EASE_SOFT };

  if (trigger === "mount") {
    return (
      <motion.div
        className={`origin-left ${className}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={transition}
      />
    );
  }

  return (
    <motion.div
      className={`origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={transition}
    />
  );
}
