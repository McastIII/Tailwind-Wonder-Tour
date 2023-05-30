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
      }
    },
  },
  plugins: [],
}

