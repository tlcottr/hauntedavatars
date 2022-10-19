/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: ["helvetica", "sans-serif"],
        HelveticaBold: ["helvetica-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
