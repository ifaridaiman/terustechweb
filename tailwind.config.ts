import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
        },
        line: "var(--color-line)",
        night: "var(--color-night)",
        "on-night": "var(--color-on-night)",
        accent: {
          DEFAULT: "var(--color-accent)",
          tint: "var(--color-accent-tint)",
        },
        "on-accent": "var(--color-on-accent)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "76px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "60px", letterSpacing: "-0.025em", fontWeight: "700" }],
        h1: ["40px", { lineHeight: "46px", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "26px" }],
        small: ["14px", { lineHeight: "22px" }],
        label: ["12px", { lineHeight: "16px", letterSpacing: "0.12em" }],
        code: ["14px", { lineHeight: "22px" }],
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      maxWidth: {
        "container-max": "var(--container-max)",
        "container-narrow": "var(--container-narrow)",
      },
      boxShadow: {
        lift: "var(--shadow-lift)",
        "focus-ring": "0 0 0 3px var(--color-accent)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
