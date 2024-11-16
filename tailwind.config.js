const animated = require("tailwindcss-animated");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "off",
  theme: {
    extend: {
      fontFamily: {
        // roboto: ["Roboto", "sans-serif"],
        // knewave: ["Knewave", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [animated],
};
