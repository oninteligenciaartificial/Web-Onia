/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#2DB542',
        'accent-light': '#3DD654',
        'accent-dark': '#229A35',
      },
    },
  },
  plugins: [],
}
