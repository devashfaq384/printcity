/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gren': 'rgb(6,214,160)',
        'light-hover':'rgba(38,36,36,0.2)'
      },
    },
  },
  plugins: [],
}
