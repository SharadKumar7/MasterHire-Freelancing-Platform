/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg-start': '#0a1628',
        'dark-bg-end': '#1a2744',
        'accent-cyan': '#00d4ff',
        'accent-teal': '#00ffaa',
        'nav-bg-dark': 'rgba(10, 22, 40, 0.8)',
        'screen-bg': '#1a2744',
      },
      fontFamily: {
        jaro: ['Jaro', 'sans-serif'],
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      // Adding custom animations and keyframes
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 255, 170, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 255, 170, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceCustom: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
        }
  },
  animation: {
        'fadeInUp-02': 'fadeInUp 0.6s ease forwards 0.2s', // Animation delays are tricky in pure tailwind
        'pulse-custom': 'pulse 2s ease infinite',
        'float-custom': 'float 3s ease-in-out infinite',
        'bounce-custom': 'bounceCustom 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

