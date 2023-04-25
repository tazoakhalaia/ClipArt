/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FF3B30",
      },
      height:{
        'height': '760px',
        'heightinfo': '519px',
        'imgsize': '356px'
      },
      screens: {
        'xl': {'max': '1240px', 'min': '1024px'},
        'md': {'max': '1024px'}
      }
    },
  },
  plugins: [],
}

