/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [ 'flex'],
  blocklist: ['grid'],
  theme: {
    colors: {
      'orange': '#F6652F',
      'blue': '#00489D',
      'white': "#FFFFFF",
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        vsm: '375px',
        sm: '450px'
      }
    },
  },
  plugins: [],
};
