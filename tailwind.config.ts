import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  content: ['./pages/**/*.{vue,js,ts,jsx,tsx}', './layouts/**/*.{vue,js,ts,jsx,tsx}', './components/**/*.{vue,js,ts,jsx,tsx}', 'app.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
