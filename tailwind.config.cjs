/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      tp: "transparent",
      current: "currentColor",
      slate: {
        main600: "#475569",
        light50: "#f8fafc",
        light100: "#f1f5f9",
        light200: "#e2e8f0",
        light300: "#cbd5e1",
      },
      green: {
        main500: "#22c55e",
        light100: "#dcfce7",
        light400: "#4ade80",
        dark600: "#16a34a",
        dark700: "#15803d",
        dark800: "#166534",
      },
      yellow: {
        text50: "#fefce8",
      },
      sky: {
        heading500: "#0ea5e9",
        light200: "#bae6fd",
        light300: "#7dd3fc",
        dark700: "#0369a1",
      },
      orange: {
        button500: "#f97316",
        button600: "#ea580c",
      },
      red: {
        button500: "#ef4444",
        button700: "#b91c1c",
      },
    },
    extend: {
      backgroundImage: {
        ohp: "url('/ohp.jpg')",
        deadlift: "url('/deadlift.jpg')",
        squat: "url('/squat.jpg')",
        dark: "url('/images/dark_mode_bg.jpg')",
        light: "url('/images/light_mode_bg.jpg')",
      },
      spacing: {
        5.5: "1.375rem",
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
