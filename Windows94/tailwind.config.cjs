/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["VT323","monospace"],
  },
    extend: {
      colors: {
        'teal': '#008080',
        'grayish': 'rgb(191, 191, 191)',
        'gray': 'rgb(255, 255, 255)'
      },
  },
  plugins: [],
}}
