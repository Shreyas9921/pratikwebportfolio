import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(20 20 23 / <alpha-value>)",
        foreground: "rgb(240 236 227 / <alpha-value>)",
        muted: "#9A9590",
        accent: "rgb(232 184 74 / <alpha-value>)",
        card: "rgb(30 31 36 / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        /** Main page column — use wide screens without ultra-wide run-on lines */
        content: "min(100%, 88rem)",
      },
      boxShadow: {
        "accent-glow": "0 0 24px rgba(232, 184, 74, 0.15)",
        "profile-ring":
          "0 0 0 2px rgba(232, 184, 74, 0.45), 0 0 18px rgba(232, 184, 74, 0.35), 0 0 36px rgba(232, 184, 74, 0.18)",
      },
      keyframes: {
        aboutSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(-28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        aboutSlideRight: {
          "0%": { opacity: "0", transform: "translateX(28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        windowPop: {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "about-in-left": "aboutSlideLeft 0.75s ease-out forwards",
        "about-in-right": "aboutSlideRight 0.78s ease-out 0.1s forwards",
        "window-pop": "windowPop 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards",
        "fade-up": "fadeUp 0.65s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
