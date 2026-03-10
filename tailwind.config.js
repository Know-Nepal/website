/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
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
        },
        highlight: "#FEEA00",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-up-delay": "fadeInUp 0.6s ease-out 0.15s forwards",
        "fade-in-up-delay-2": "fadeInUp 0.6s ease-out 0.3s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
