import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: [
    './app/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        'xs': '480px'
      }
    },
  },
  plugins: [],
} satisfies Config;