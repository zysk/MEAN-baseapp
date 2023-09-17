/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,scss,ts,js}",
    "./src/**/*.{html,scss,ts,js}",
    "./src/**/**/*.{html,scss,ts,js}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  prefix: "tw-",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
