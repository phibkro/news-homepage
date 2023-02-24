/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      primary_orange: "E9AB53",
      primary_red: "F15E50",

      off_white: "FFFDFA",
      grayish_blue: "C5C6CE",
      dark_grayish_blue: "5D5F79",
      very_dark_blue: "000019",
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
