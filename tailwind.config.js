/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: '#f1f1f1'
      },
      textColor: {
        'red-price': '#ff0000',
        'black-text': '#3d3d3d',
        'blueGray': '#878DA6'
      }
    },
  },
  plugins: [],
};