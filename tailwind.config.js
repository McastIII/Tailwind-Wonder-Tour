/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary:'#07b4ab',
        grey: '#f6f6f6',
      },

      fontFamily: {
        'Montserrat' :['Montserrat','sans-serif']
      },

      backgroundImage: {
        'slide1': 'url("./img/slider-4-slide-1-1920x678.jpg")',
        'slide2': 'url("./img/slider-4-slide-2-1920x678.jpg")',
        'slide3': 'url("./img/slider-4-slide-3-1920x678.jpg")',
        'parallax1': 'url("./img/parallax-1-1920x850.jpg")',
        'parallax2': 'url("./img/parallax-2-1920x850.jpg")',
        'years': 'url("./img/thumnails-info-1-370x303.jpg")',
      },
    },
  },
  plugins: [],
}

