const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./lib/radixToTailwind')
const {
  sand,
  sandDark,
  blackA,
  gray,
  grayDark,
  mauve,
  mauveDark,
  pink,
  pinkDark,
  olive,
  oliveDark,
  lime,
  limeDark,
} = require('@radix-ui/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        overlay: radixToTailwind(blackA),
        neutral: radixToTailwind(olive),
        neutralDark: radixToTailwind(oliveDark),
        primary: radixToTailwind(lime),
        primaryDark: radixToTailwind(limeDark),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
        2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
        4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
        5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
        6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
      },
    },
  },
  plugins: [],
}
