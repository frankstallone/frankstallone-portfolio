// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
const defautTheme = require("tailwindcss/defaultTheme");
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
    screens: {
      xs: "540px",
      ...defautTheme.screens,
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
        roll: {
          100: "#d3f6fe",
          200: "#aae0fb",
          300: "#86c2f1",
          400: "#5da2eb",
          500: "#4283e2",
          600: "#2e66d8",
          700: "#124acf",
          800: "#0533b5",
          900: "#052785",
          1000: "#0b1736",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
