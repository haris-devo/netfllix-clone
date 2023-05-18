/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E50914',
        'secondary': '#2F2F2F',
        'tertiary': '#2D2D2D',
        'inputBg':"#333"
      },
      
      height:{
        'hero': '43rem',
      }
    },
  },
  plugins: [],
}