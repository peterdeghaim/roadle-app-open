module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        drukwide: ["druk-wide", "sans-serif"],
        drukcondensed: ["druk-condensed", "sans-serif"]
      },
      colors:{
        'brkfstrd-blue': '#0d749b',
      }
    },
  },
  plugins: [],
}
