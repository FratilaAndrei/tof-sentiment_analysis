/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "1px 1px 5px 2px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        view: "1140px",
        "mobile-L": "425px",
        "monitor-2k": "2560",
      },
    },
  },
  plugins: [],
};
