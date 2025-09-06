import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px', 
        ...defaultTheme.screens, 
        '3xl': '1600px', 
      },
    },
  },
  plugins: [],
};
