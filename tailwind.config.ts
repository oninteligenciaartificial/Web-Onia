import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0e0e0e',
          dim: '#0e0e0e',
          bright: '#2c2c2c',
          container: '#1a1919',
          'container-low': '#131313',
          'container-high': '#201f1f',
          'container-highest': '#262626',
          'container-lowest': '#000000',
          variant: '#262626',
          tint: '#73f578',
        },
        primary: {
          DEFAULT: '#2DB542',
          light: '#73f578',
          dim: '#64e66c',
          container: '#31b845',
          dark: '#005a16',
        },
        secondary: {
          DEFAULT: '#85faad',
          container: '#006d3b',
          dim: '#77eba0',
        },
        accent: '#2DB542',
        'accent-light': '#73f578',
        'accent-dark': '#005a16',
        'on-surface': '#ffffff',
        'on-surface-variant': '#adaaaa',
        outline: '#777575',
        'outline-variant': '#494847',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        glass: '12px',
      },
      backdropBlur: {
        glass: '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 181, 66, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(45, 181, 66, 0.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
