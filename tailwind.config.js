/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#3A3A3A',
        gray2: '#616161',
        gray3: '#898989',
        gray4: '#D9D9D9',
        gray5: '#D8D8D8',
        gray6: '#9F9F9F',
        primary:'#B88E2F',
      },
      fontFamily:{
        Poppins:['Poppins','sans-serif'],
        Montserrat:['Montserrat', 'sans-serif']
      }

    },
  },
  plugins: [],
}

