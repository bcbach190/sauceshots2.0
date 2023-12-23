/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      'BebasNeue' : ['Bebas Neue', 'sans-serif'],
      'Mynunito' : ['Nunito Sans', 'sans-serif']
    },

    extend: {
      colors:
      {
        sauce: '#ba1c1c',
        sauceactive: '#851313'
      },
    },
  },
  plugins: [],
}

