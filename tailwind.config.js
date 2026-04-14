/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#030014",
          50: "#0a0a1a",
          100: "#0d0f24",
          200: "#12152e",
          300: "#1a1d3a",
        },
        neon: {
          violet: "#8b5cf6",
          "violet-light": "#a78bfa",
          "violet-dim": "#7c3aed",
          cyan: "#06b6d4",
          teal: "#2dd4bf",
          emerald: "#34d399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
        "marquee": "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
