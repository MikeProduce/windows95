/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#008080',
        'grayish': 'rgb(191, 191, 191)',
        'gray': 'rgb(255, 255, 255)'
      },
    },
  },
  plugins: [],
}
