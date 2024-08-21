/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '100%',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    fontSize: {
      xs: '.75rem', // => 12px
      sm: '.875rem', // => 14px
      base: '1rem', // => 16px
      lg: '1.125rem', // => 18px
      xl: '1.25rem', // => 20px
      '2xl': '1.5rem', // => 24px
      '3xl': '1.875rem', // => 30px
      '4xl': '2.25rem', // => 36px
      '5xl': '3rem', // => 48px
      '6xl': '3.75rem', // => 60px
      '7xl': '4.5rem', // => 	72px
      '8xl': '6rem', // => 96px
      '9xl': '8rem', // => 128px

      22: '22px',
      28: '28px',
      32: '32px',
      120: '120px',
    },
    colors: {
      main1: '#000',
      main2: '#000',
      font: '#000',
      accent: '#000',
      sub: '#000',

      white: '#fff',
      blue: '#260DFC',
      pink: '#FE07FC',
      green: '#21a944',
      yellow: '#ffc82c',
      gray: '#F6F5F2',
      'rgba-white-90': 'rgba(255, 255, 255, 0.90)',
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      serif: ['Noto Serif JP', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}