/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#E7F6FF',
        'bg-color-secondary': '#FFFFFF',
        'text-light': '#9D9D9D',
        'text-light-secondary': '#5C5C5C',
        'border-color': '#F3F3F3',
      },
      width: {
        133: '8.3125rem',
      },
      height: {
        112: '7rem',
      },
      screens: {
        tablet: '1240px',
        pad: '768px',
      },
    },
  },
  plugins: [],
};
