/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      keyframes: {
        animeLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        animeLeft: 'animeLeft 1s forwards',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      fontFamily: {
        playwright: ['Playwright Colombia', 'sans-serif'],
      },
      colors: {
        'font-first': '#009373',
        'font-second': '#FFFFFF',
        'bg-white': '#FFFFFF',
        'bg-gray': '#E8EBEA',
      },
      fontSize: {
        '7xl': '5.4rem',
      },
    },
  },
  plugins: [],
};
