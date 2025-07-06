/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores basados en el logo
        sage: {
          50: '#f6f8f4',
          100: '#e9f0e3',
          200: '#d4e1c8',
          300: '#b5cca2',
          400: '#94b377',
          500: '#7a9b5a', // Verde salvia principal del logo
          600: '#5f7d44',
          700: '#4c6237',
          800: '#3f502f',
          900: '#364329',
        },
        earth: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddd0',
          300: '#d7c4a8',
          400: '#c4a57d',
          500: '#b8935c', // Marrón medio del logo
          600: '#a67c47',
          700: '#8b5a2b', // Marrón oscuro del logo
          800: '#724a26',
          900: '#5e3e22',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3', // Crema principal del logo
          200: '#faf2e4',
          300: '#f5e8c8',
          400: '#eed9a4',
          500: '#e5c678',
          600: '#d9b054',
          700: '#c49441',
          800: '#a17838',
          900: '#846230',
        },
        mushroom: {
          50: '#faf7f4',
          100: '#f3ebe3',
          200: '#e6d4c2',
          300: '#d4b896', // Color del hongo en el logo
          400: '#c19a6b',
          500: '#b08249',
          600: '#9d6f3e',
          700: '#835a34',
          800: '#6b4a2e',
          900: '#573d27',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      backgroundImage: {
        'ornamental-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23b8935c\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"2\"/%3E%3Ccircle cx=\"50\" cy=\"10\" r=\"2\"/%3E%3Ccircle cx=\"10\" cy=\"50\" r=\"2\"/%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'mushroom-pattern': "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%237a9b5a\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M40 20c8 0 15 7 15 15s-7 15-15 15-15-7-15-15 7-15 15-15zm0 5c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}