/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js

  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        blueSky: '#E6ECF5',
        red: '#EF3061',
        blueDark: '#07469C',
        dark: '#333333',
        blueLight: '#0099E1',
        grayLight: '#757575',
        whiteDark: '#F2F2F2',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        nunito: ['Nunito'],
        mulish: ['Mulish'],
      },
    },
    plugins: [],
  },
});
