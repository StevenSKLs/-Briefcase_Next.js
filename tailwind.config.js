/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],

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
        m25: '425px',
        sm: '600px',
        m768: '768px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        nunito: ['Nunito'],
        mulish: ['Mulish'],
        eurostile: ['"eurostile", sans-serif'],
      },
      keyframes: {
        glow1: {
          '0%': { boxShadow: '0 0 20px 13px #0b9aff' },
          '50%': { boxShadow: '0 0 6px #0b9aff, 0 0 6px #0b9aff' },
          '100%': { boxShadow: '0 0 20px 13px #0b9aff' },
        },
        glow2: {
          '0%': { boxShadow: '0 0 20px 13px #45B1D7' },
          '50%': { boxShadow: '0 0 6px #45B1D7, 0 0 6px #45B1D7' },
          '100%': { boxShadow: '0 0 20px 13px #45B1D7' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
});
