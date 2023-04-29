/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "Sans": ["Open Sans", "sans-serif"]
    },
    extend: {
      colors: {
        "brand-nude": "#a8977b",
        "bran-dark": "#1c1c1d",
        "brand-darker": "#131313",
        "brand-light": "#d7e4d7"
      }
    },
  },
  plugins: [],
}

