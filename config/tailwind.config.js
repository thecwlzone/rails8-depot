// // const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Roboto", "sans-serif"],
        //body: ["Roboto", "sans-serif"],
        //mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    //require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/typography'),
  ]
}
