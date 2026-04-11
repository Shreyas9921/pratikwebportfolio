import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#1D1E20",
        foreground: "#DADADB",
        muted: "#9B9C9D",
        accent: "#FFCC1A",
        card: "#26272a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        /** Main page column — use wide screens without ultra-wide run-on lines */
        content: "min(100%, 88rem)",
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
      },
      animation: {
        "about-in-left": "aboutSlideLeft 0.75s ease-out forwards",
        "about-in-right": "aboutSlideRight 0.78s ease-out 0.1s forwards",
        "window-pop": "windowPop 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards",
      },
    },
  },
  plugins: [],
};

export default config;
