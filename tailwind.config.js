/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['themes/superstoretheme/layouts/**/*.html', 'themes/superstoretheme/assets/js/**/*.{jsx,js,tsx,ts}',],
  theme: {
    extend: {},
  },
  plugins: [require('tailgrids/plugin'), require('@tailwindcss/forms')],
}

