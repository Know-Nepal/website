/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          100: "#FFFBA4",
          200: "#D2B863",
          300: "#AD832D",
          400: "#3D2E10",
        },
        primary: {
          100: "#B2E3F0",
          200: "#33B6D8",
          300: "#14596B",
          400: "#0C3640",
          500: "#071F26",
        },
        highlight: "#FEEA00",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.4)",
        "card-hover":
          "0 0 0 1px rgba(51,182,216,0.2), 0 8px 32px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
