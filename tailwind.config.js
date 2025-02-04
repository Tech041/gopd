/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F88F09",
        secondary: "#4F4F4F",
        tertiary: "#F1F9FE",
      },
    },
  },
  plugins: [],
};
