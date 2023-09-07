/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'LeagueSpartan': ['"Roboto Slab"', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        clifford: '#da373d',
      },
    }
  },
  plugins: [],
}

