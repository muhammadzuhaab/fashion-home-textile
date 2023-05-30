/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./{page,js}/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif']
      },
    },
  },
  plugins: [],
}

