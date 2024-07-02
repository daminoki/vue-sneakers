/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#E7F6FF',
        'bg-color-secondary': '#FFFFFF',
        'overlay-color': '#0000007F',
        'text-light': '#9D9D9D',
        'text-light-secondary': '#5C5C5C',
        'border-color': '#F3F3F3',
        'button-color': '#9DD458',
        'button-hover-color': '#7EBD3F',
        'bg-gradient': 'linear-gradient(180deg, #9DD458 0%, #7EBD3F 100%)',
      },
      width: {
        70: '4.375rem',
        133: '8.3125rem',
        385: '24.0625rem',
      },
      height: {
        70: '4.375rem',
        112: '7rem',
      },
      minWidth: {
        70: '4.375rem',
      },
      screens: {
        tablet: '1240px',
        pad: '768px',
      },
    },
  },
  plugins: [],
};
