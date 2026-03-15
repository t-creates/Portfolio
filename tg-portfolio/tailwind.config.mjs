import tailwindcssAnimate from 'tailwindcss-animate';
import daisyui from 'daisyui';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg3.jpeg')",
        tgBg: "url('/tg-bg.jpeg')",
      },
      transitionProperty: {
        none: 'none',
      },
      transform: {
        none: 'none',
      },
      animation: {
        none: 'none',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    daisyui,
    tailwindScrollbarHide,
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};

export default config;
