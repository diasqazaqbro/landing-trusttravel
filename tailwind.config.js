/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './price.html',
    './not-found.html',
    './portfolio.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      accent: {
        light: '#cc9f97',
        DEFAULT: '#C99A91',
        darken: '#be857a',
      },
      main: '#2A2A2A',
      gray: {
        light: '#C6C6C6',
        DEFAULT: '#747474',
      },
      bgc: '#E4E4E4',
    },
    screens: {
      '2xl-m': { max: '1535px' },
      'xl-m': { max: '1279px' },
      'lg-m': { max: '1023px' },
      'md-m': { max: '767px' },
      'sm-m': { max: '639px' },
      tall: { raw: '(max-height: 650px)' },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '55px',
        },
      },
      keyframes: {
        'slide-x': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(3px)' },
        },
        'slide-y': {
          '0%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(3px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-x': 'slide-x 1s ease infinite',
        'slide-y': 'slide-y 1s ease alternate infinite',
        'fade-in': 'fade-in .4s ease',
        'slide-in': 'slide-in .4s ease',
      },
    },
  },
}
