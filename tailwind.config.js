/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2461',
          light: '#EEF2FF',
          dark: '#060F24',
        },
        orange: {
          DEFAULT: '#F97316',
          hover: '#EA6A0A',
        },
        light: '#F4F6FB',
        'text-primary': '#0F172A',
        'text-secondary': '#4B5563',
        border: '#E2E8F0',
        success: '#16A34A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
