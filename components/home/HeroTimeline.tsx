"use client";

import { motion, useReducedMotion } from "motion/react";

import { EASE_SOFT } from "@/components/motion/Reveal";

const TRACK_Y = 260;
const TRACK_X1 = 40;
const TRACK_X2 = 480;
const TRACK_LENGTH = TRACK_X2 - TRACK_X1;
const DAY14_X = 260;

// One loop: draw over 6s, hold the finished line for 1s, fade out over 0.3s, then restart.
const CYCLE_DURATION = 7.3;
const DRAW_END = 6 / CYCLE_DURATION;
const HOLD_END = 7 / CYCLE_DURATION;

const nodes = [
  { x: TRACK_X1, day: "Day 01", label: "Frame", accent: false },
  { x: DAY14_X, day: "Day 14", label: "Demo", accent: false },
  { x: TRACK_X2, day: "Day 30", label: "Live", accent: true },
] as const;

/** The hero centrepiece: a 30-day timeline with an accent progress line that draws and loops. */
export function HeroTimeline() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <svg
      viewBox="0 0 520 440"
      role="img"
      aria-label="Timeline of the 30-day process: frame on day 1, demo on day 14, live on day 30"
      className="h-auto w-full max-w-[520px]"
    >
      <text x="20" y="34" className="fill-on-night/70 font-mono text-[11px] uppercase tracking-[0.12em]">
        Your first 30 days
      </text>
      <text x="20" y="50" className="fill-on-night/70 font-mono text-[11px] uppercase tracking-[0.12em]">
        From kickoff to live
      </text>

      <line
        x1={TRACK_X1}
        y1={TRACK_Y}
        x2={TRACK_X2}
        y2={TRACK_Y}
        strokeWidth={14}
        strokeLinecap="round"
        strokeOpacity={0.22}
        className="stroke-on-night"
      />

      {reduceMotion ? (
        <line
          x1={TRACK_X1}
          y1={TRACK_Y}
          x2={TRACK_X2}
          y2={TRACK_Y}
          strokeWidth={14}
          strokeLinecap="round"
          className="stroke-accent"
        />
      ) : (
        <motion.line
          x1={TRACK_X1}
          y1={TRACK_Y}
          x2={TRACK_X2}
          y2={TRACK_Y}
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={TRACK_LENGTH}
          className="stroke-accent"
          animate={{
            strokeDashoffset: [TRACK_LENGTH, 0, 0, 0],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: CYCLE_DURATION,
            times: [0, DRAW_END, HOLD_END, 1],
            ease: EASE_SOFT,
            repeat: Infinity,
          }}
        />
      )}

      <line
        x1={DAY14_X}
        y1={TRACK_Y}
        x2={DAY14_X}
        y2={TRACK_Y - 48}
        strokeWidth={3}
        strokeLinecap="round"
        className="stroke-on-night"
      />

      <line
        x1={TRACK_X2}
        y1={TRACK_Y}
        x2={TRACK_X2}
        y2={TRACK_Y - 96}
        strokeWidth={3}
        strokeLinecap="round"
        className="stroke-accent"
      />

      <g>
        <rect x={TRACK_X2 - 30} y={TRACK_Y - 128} width={60} height={28} rx={14} className="fill-accent" />
        <text
          x={TRACK_X2}
          y={TRACK_Y - 109}
          textAnchor="middle"
          className="fill-on-accent font-mono text-[11px] font-medium uppercase tracking-[0.08em]"
        >
          Live
        </text>
      </g>

      {nodes.map((node) => (
        <g key={node.day}>
          <circle
            cx={node.x}
            cy={TRACK_Y}
            r={9}
            strokeWidth={3}
            className={node.accent ? "fill-accent stroke-accent" : "fill-night stroke-on-night"}
          />
          <text
            x={node.x}
            y={TRACK_Y + 34}
            textAnchor="middle"
            className="fill-on-night font-mono text-[11px] uppercase tracking-[0.08em]"
          >
            {node.day}
          </text>
          <text
            x={node.x}
            y={TRACK_Y + 50}
            textAnchor="middle"
            className="fill-on-night/60 font-mono text-[11px] uppercase tracking-[0.08em]"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
