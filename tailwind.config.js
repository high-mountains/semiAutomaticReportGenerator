/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    listStyleType: {
          none: 'none',
          circle: 'circle',
          disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          roman: 'upper-roman',
        },
    extend: {letterSpacing: {
      tightest: '-0.6rem',
      moreTightest: '-0.8rem',
    },},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },
}



// theme: {
//   listStyleType: {
//     none: 'none',
//     disc: 'disc',
//     decimal: 'decimal',
//     square: 'square',
//     roman: 'upper-roman',
//   }
// }