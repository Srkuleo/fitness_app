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
      },
      spacing: {
        18: "4.5rem",
        "2px": "2px",
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
