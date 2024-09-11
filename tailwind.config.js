/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaoren: ["Jaoren", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
