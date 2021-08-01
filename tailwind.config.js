// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
const { amber, red } = require("@radix-ui/colors");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Futura Now Headline", "sans-serif"],
      future: ["Futura Now Var", "sans-serif"],
      now: ["Futura Now Text", "sans-serif"],
    },
    extend: {
      colors: {
        amber: amber,
        red: red,
        btc: {
          50: "#f5faff",
          100: "#d2ebff",
          200: "#8ec4f6",
          300: "#619ddd",
          400: "#3e78c0",
          500: "#2c5c9d",
          600: "#184281",
          700: "#0c2c60",
          800: "#031633",
          900: "#010d25",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
