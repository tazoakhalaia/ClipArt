/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FF3B30",
      },
      height:{
        'height': '760px',
        'heightinfo': '519px',
        'imgsize': '356px',
        'mdslideheight': '560px',
        'smslideheight': '280px'
      },
      width: {
        'mdslidewidth': '928px'
      },
      screens: {
        'xl': {'max': '1240px', 'min': '1024px'},
        'md': {'max': '1024px', 'min': '360px'},
        'sm': {'max': '360px'}
      }
    },
  },
  plugins: [],
}

