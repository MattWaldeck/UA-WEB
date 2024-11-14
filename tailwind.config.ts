// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-plak': ['Neue Plak', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
};

export default config;
