/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'matrix-fall': 'matrix-fall linear infinite',
        'glitch': 'glitch 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'circuit-flow': 'circuit-flow 3s linear infinite',
        'holographic': 'holographic 4s ease infinite',
        'neon-flicker': 'neon-flicker 2s infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'matrix-fall': {
          '0%': {
            transform: 'translateY(-100vh)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
        glitch: {
          '0%': {
            transform: 'translate(0)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
          },
          '100%': {
            transform: 'translate(0)',
          },
        },
        'pulse-glow': {
          'from': {
            'box-shadow': '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6',
          },
          'to': {
            'box-shadow': '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6',
          },
        },
        'circuit-flow': {
          '0%': {
            'stroke-dasharray': '0 100',
          },
          '100%': {
            'stroke-dasharray': '100 0',
          },
        },
        holographic: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        'neon-flicker': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
};