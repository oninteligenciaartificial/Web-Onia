/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
}
