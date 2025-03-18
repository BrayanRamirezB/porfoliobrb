/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-in-out',
        'expand-horizontally': 'expandHorizontally 0.6s ease-out',
        'blurred-fade-in': 'blurred-fade-in 0.9s ease-in-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        expandHorizontally: {
          '0%': {
            transform: 'scaleX(0)'
          },
          '100%': {
            transform: 'scaleX(1)'
          }
        },
        'blurred-fade-in': {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0'
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: []
}
