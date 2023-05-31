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

      backgroundImage: {
        'slide1': 'url("./img/slider-4-slide-1-1920x678.jpg")',
        'slide2': 'url("./img/slider-4-slide-2-1920x678.jpg")',
        'slide3': 'url("./img/slider-4-slide-3-1920x678.jpg")',
      },
    },
  },
  plugins: [],
}

