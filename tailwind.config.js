import {
  COLOR_TW_ACCENT,
  COLOR_TW_BASE,
  COLOR_TW_WHITE,
} from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: COLOR_TW_BASE,
        accent: COLOR_TW_ACCENT,
        custom_white: COLOR_TW_WHITE,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
