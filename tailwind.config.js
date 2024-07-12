/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eczar: ["Eczar", "serif"],
        mont: ["Montserrat", "sans-serif"],
        inter: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
