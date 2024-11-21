const animated = require("tailwindcss-animated");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        spinBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinBorder: "spinBorder 2s linear infinite",
      },
      fontFamily: {
        // roboto: ["Roboto", "sans-serif"],
        // knewave: ["Knewave", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [animated],
};
