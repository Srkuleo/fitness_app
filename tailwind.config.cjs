/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "10px": "10px",
      },
      backgroundImage: {
        ohp: "url('/ohp.jpg')",
      },
    },
  },
  plugins: [],
};
