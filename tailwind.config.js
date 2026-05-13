/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A2332',
        gold: '#C9A84C',
        cream: '#F8F5EF',
        warm: '#EDE8DC',
        teal: '#2E7D72',
        red: '#C0392B',
        purple: '#5B4A8C',
        blue: '#1A5276',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
