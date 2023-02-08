/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   gray: {
    //     light: "",
    //     dark: "",
    //   },
    //   green: "",
    //   textCol: "",

    // },
    extend: {
      backgroundImage: {
        ohp: "url('/ohp.jpg')",
        deadlift: "url('/deadlift.jpg')",
        squat: "url('/squat.jpg')",
        "gray-sand": "url('/images/gray-sand.jpg')",
        "gray-lines": "url('/images/gray-lines.jpg')",
      },
      spacing: {
        5.5: "1.375rem",
        18: "4.5rem",
        "2px": "2px",
        "3px": "3px",
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
