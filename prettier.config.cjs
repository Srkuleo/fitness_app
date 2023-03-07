/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 90,
  proseWrap: "always",
  jsxSingleQuote: true,
  semi: true,
  trailingComma: "none",
  tabWidth: 2
};
