/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_orange: "hsl(35, 77%, 62%)",
        primary_red: "hsl(5, 85%, 63%)",

        off_white: "hsl(36, 100%, 99%)",
        grayish_blue: "hsl(233, 8%, 79%)",
        dark_grayish_blue: "hsl(236, 13%, 42%)",
        very_dark_blue: "hsl(240, 100%, 5%)",
      },
      screens: {
        mobile: "375px",
        laptop: "1024px",
        desktop: "1440px",
      },
      fontFamily: {
        sans: ['Inter, sans-serif'],
      },
      fontSize: {
        paragraph: "15px",
      },
    },
  },
  plugins: [],
}
