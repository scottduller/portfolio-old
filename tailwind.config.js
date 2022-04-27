module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      screens: {
        md: '900px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
