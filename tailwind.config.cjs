/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F5A47',
          dark: '#0A3E31',
          light: '#16A34A',
        },
        cream: {
          DEFAULT: '#FAF9F5',
          subtle: '#F3F1EA',
        },
        accent: {
          orange: '#F97316',
          yellow: '#EAB308',
        }
      },
      fontFamily: {
        sans: ['Haffer', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Haffer XH"', 'Haffer', 'sans-serif'],
        haffer: ['Haffer', 'sans-serif'],
        'haffer-xh': ['"Haffer XH"', 'Haffer', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '700',
        black: '700',
      },
      maxWidth: {
        'container-1440': '1440px',
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
