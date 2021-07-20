// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
const { amber, red } = require("@radix-ui/colors");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Futura Now Headline", "sans-serif"],
      sans: ["Futura Now Var", "sans-serif"],
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
