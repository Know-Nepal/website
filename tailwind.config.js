/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
