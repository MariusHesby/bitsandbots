/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bitsBlue: "#0045FF",
        bitsBlueLight: "#4A7BFF",
        bitsGreen: "#16A34A",
        bitsGreenDark: "#15803D",
        bitsGreenActive: "#15803D",
        bitsRed: "#FF0000",
        bitsYellow: "#FACC15",
        bitsGray: "#999",
        bitsGrayLight: "#ccc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nabla: ["Nabla", "cursive"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
  ],
};
