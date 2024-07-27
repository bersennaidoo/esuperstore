/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['themes/superstoretheme/layouts/**/*.html', 'themes/superstoretheme/assets/js/react/**/*.{jsx,js,tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailgrids/plugin'), require('@tailwindcss/forms')],
}

