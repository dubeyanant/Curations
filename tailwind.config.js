/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Darker Grotesque", "sans-serif"],
    },
    colors: {
      primary: {
        dark: "#D84F2A",
        light: "#F9744B",
        hover: "#D6C4B0",
        tab: "#E1D9CF",
        bg: "#EDE6DF",
      },
      semantics: {
        failure: "#EA4242",
        warning: "#FFBF00",
        success: "#32A853",
      },
      grays: {
        transparent: "#00000000",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#7A7A7A",
      },
    },
    extend: {},
  },
  plugins: [],
};
