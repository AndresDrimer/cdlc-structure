/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "gris": "#b3b1b2",
        "rojo": "#e40613",
        "ciudades": "#23afb2",
        "habitat": "#c33432",
        "movilidad": "#d8aa06",
        "territorio": "#ce050b",
        "urbanidad": "#a8301f",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],

};
