/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#94a3b8',
        background: '#0f172a',
        card: '#1e293b',
      },
    },
  },
  plugins: [],
}
