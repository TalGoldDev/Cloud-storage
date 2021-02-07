const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      customBlue: {
        light: "#0582b7",
        lighter: "#00c9d0",
        300: "#01f9d1",
      },
      purple: {
        700: "#2f1789",
        500: "#25298d",
        400: "#01539c",
        300: "#006ea3",
        200: "#0079a6",
        100: "#0098af",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/background.png')",
        "footer-bg": "url('/footerbg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
