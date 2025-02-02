/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Caveat"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
