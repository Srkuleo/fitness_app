/**  @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      white: "#fff",
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
        light500: "#64748b",
        dark700: "#334155",
        dark800: "#1e293b",
        dark900: "#0f172a",
        dark950: "#020617",
      },
      green: {
        main500: "#22c55e",
        light100: "#dcfce7",
        light200: "#bbf7d0",
        light300: "#86efac",
        light400: "#4ade80",
        dark600: "#16a34a",
        dark700: "#15803d",
        dark800: "#166534",
      },
      yellow: {
        text50: "#fefce8",
      },
      orange: {
        icon300: "#fdba74",
        button500: "#f97316",
        button600: "#ea580c",
        dark700: "#c2410c",
      },
      red: {
        removeBtn100: "#fee2e2",
        button400: "#fca5a5",
        button500: "#ef4444",
        removeBtn600: "#dc2626",
        button700: "#b91c1c",
      },
    },
    extend: {
      spacing: {
        18: "4.5rem",
        carouselNavBtns: "6px",
        carousel: "18.5px",
        mediumButton: "10px",
      },
    },
  },
};
