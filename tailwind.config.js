/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101D32', dnavy: '#0B1424', brand: '#2563EB',
        lblue: '#EFF6FF', page: '#F5F7FA', ink: '#172033', muted: '#64748B',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: { soft: '0 8px 30px -12px rgba(16,29,50,.14)' },
    },
  },
  plugins: [],
}
