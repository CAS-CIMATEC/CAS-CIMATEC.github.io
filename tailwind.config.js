/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ['"League Spartan"', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        clifford: '#da373d',
      },
    }
  },
  plugins: [],
}

