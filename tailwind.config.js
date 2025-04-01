import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx,jsx}"],
  darkMode: ["selector", "[data-theme=dark]"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...theme.fontFamily.sans],
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
