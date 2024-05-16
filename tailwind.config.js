/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [ 'flex'],
  blocklist: [''],
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
        vsm: '315px',
        sm: '450px',
        md: '850px',
      },
      zIndex: {
        '100': '100',
        '0': '0',
        '10': '10',
      },
    },
  },
  plugins: [],
};
