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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
