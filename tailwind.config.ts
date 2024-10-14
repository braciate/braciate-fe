/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaoren: ["var(--font-jaoren)"],
        poppins: ["var(--font-poppins)"],
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundImage: {},
    },
    plugins: [require("daisyui")],
  },
};
