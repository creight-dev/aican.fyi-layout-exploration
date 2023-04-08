const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./lib/radixToTailwind')
const { sand, sandDark, blackA, gray, grayDark, mauve, mauveDark, pink, pinkDark } = require('@radix-ui/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        overlay: radixToTailwind(blackA),
        neutral: radixToTailwind(gray),
        neutralDark: radixToTailwind(grayDark),
        primary: radixToTailwind(pink),
        primaryDark: radixToTailwind(pinkDark),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
