/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-night': '#040f1f',
        'navy-blue': '#081e3e',
        'gunmetal-gray': '#334155',
        'midnight-teal': '#0f172a',
        'charcoal-slate': '#1e293b'
      }
    },
  },
  plugins: [],
}
