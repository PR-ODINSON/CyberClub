/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#0FF1B2',
          50: '#E6FEF7',
          100: '#CCFDEF',
          200: '#99FBDF',
          300: '#66F9CF',
          400: '#33F7BF',
          500: '#0FF1B2',
          600: '#0CC18E',
          700: '#09916A',
          800: '#066146',
          900: '#033023'
        },
        accent: {
          DEFAULT: '#7C3AED',
          50: '#F3EEFF',
          100: '#E7DDFF',
          200: '#CFBBFF',
          300: '#B799FF',
          400: '#9F77FF',
          500: '#7C3AED',
          600: '#6D2EBE',
          700: '#5E228F',
          800: '#4F1660',
          900: '#400A31'
        },
        dark: {
          DEFAULT: '#05060A',
          50: '#2A2D35',
          100: '#1F2228',
          200: '#14161B',
          300: '#0F1015',
          400: '#0A0B0F',
          500: '#05060A',
          600: '#040508',
          700: '#030406',
          800: '#020304',
          900: '#010102'
        },
        light: {
          DEFAULT: '#F8FAFC',
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
          600: '#64748B',
          700: '#475569',
          800: '#334155',
          900: '#1E293B'
        },
        muted: {
          light: '#A8B3C7',
          dark: '#9AA4B2'
        },
        danger: '#FF4D6D'
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'cursor-blink': 'cursor-blink 1s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(15, 241, 178, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(15, 241, 178, 0.8)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'scanline': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'cursor-blink': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(15, 241, 178, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 241, 178, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(5, 6, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(15, 241, 178, 0.2)',
        },
        '.neon-glow': {
          boxShadow: '0 0 20px rgba(15, 241, 178, 0.5), 0 0 40px rgba(15, 241, 178, 0.3), 0 0 60px rgba(15, 241, 178, 0.1)',
        },
        '.neon-glow-purple': {
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.3), 0 0 60px rgba(124, 58, 237, 0.1)',
        },
        '.text-glow': {
          textShadow: '0 0 10px rgba(15, 241, 178, 0.8), 0 0 20px rgba(15, 241, 178, 0.6), 0 0 30px rgba(15, 241, 178, 0.4)',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
