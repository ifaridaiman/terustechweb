"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children, isValidElement, type ReactNode } from "react";

export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades a section or card up 16px into view once, honouring reduced motion. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: EASE_SOFT }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function itemVariants(reduceMotion: boolean) {
  return {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: EASE_SOFT },
    },
  };
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a row of siblings (cards, hero elements) and staggers their Reveal-style entrance. */
export function RevealGroup({ children, className }: RevealGroupProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <motion.div variants={itemVariants(reduceMotion)}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
