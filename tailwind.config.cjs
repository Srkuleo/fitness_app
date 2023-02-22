/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        light400: "#94a3b8",
        dark700: "#334155",
        dark800: "#1e293b",
        dark900: "#0f172a",
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
        dark800: "#075985",
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
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
