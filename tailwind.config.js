/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        golden: {
          50: "#d3b261",
        },
        glowingblack: {
          50: "#2C3333",
        },
      },
    },
  },
  plugins: [],
};
