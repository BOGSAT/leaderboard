/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
    fontSize: {
      sm: "14px",
      p: "18px",
      h3: "28px",
      h2: ["34px", "50px"],
      h1: ["48px", "60px"],
    },
  },
  plugins: [],
};
