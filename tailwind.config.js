// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
const defautTheme = require("tailwindcss/defaultTheme");
const { amber, red, indigo } = require("@radix-ui/colors");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Facundo", "sans-serif"],
    },
    screens: {
      xs: "540px",
      ...defautTheme.screens,
    },
    extend: {
      minHeight: {
        80: "80vh",
      },
      colors: {
        indigo: indigo,
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
        gold: {
          50: "#fff8d5",
          100: "#fbda73",
          200: "#e8b80a",
          300: "#c4981b",
          400: "#ab781e",
          500: "#8f5e1a",
          600: "#7a4615",
          700: "#682e0c",
          800: "#4e1a05",
          900: "#220801",
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
