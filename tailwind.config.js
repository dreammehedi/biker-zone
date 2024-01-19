/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'primary-color': '#E76F51',
          'dark-color': 'rgba(0, 0, 0, 0.80)'
        },
      },
    },
    plugins: [],
  }