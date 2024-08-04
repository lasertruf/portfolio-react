/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ffc86b",
        lowEmphasis:'#ffda9b'
      }
    },
  },
  plugins: [],
}

