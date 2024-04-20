/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#12130F',
        'text-dark': '#EAE6E5',
        'dark-accent-1': '#5B9279',
        'dark-accent-2': '#8FCB9B',
        'dark-accent-3': '#9FA0C3',
      },
      spacing: {
        xs: '0.4rem',
        sm: '0.8rem',
        'sm+': '1.2rem',
        md: '1.6rem',
        'md+': '2.4rem',
        lg: '3.2rem',
        'lg+': '4rem',
        xl: '4.8rem',
        'xl+': '5.6rem',
        '2xl': '6.4rem',
        '2xl+': '7.2rem',
        '3xl': '8rem',
        '4xl': '9.6rem',
        '5xl': '11.2rem',
        '6xl': '12.8rem',
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        sm: ['0.8rem', '1.3'],
        'sm+': ['1.2rem', '1.3'],
        base: ['1.6rem', '1.3'],
        lg: ['2.4rem', '1.3'],
        xl: ['3.2rem', '1.3'],
        '2xl': ['4rem', '1.3'],
        '3xl': ['4.8rem', '1.3'],
        '4xl': ['5.2rem', '1.3'],
        '5xl': ['6.4rem', '1.3'],
      },
      screens: {
        'sm-max': { max: '649px' },
        sm: '640px',
        'md-max': { max: '749px' },
        md: '750px',
        'lg-max': { max: '989px' },
        tablet: { min: '750px', max: '989px' },
        lg: '990px',
        'xl-max': { max: '1399px' },
        xl: '1400px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '10px' },
      });
    }),
  ],
};
