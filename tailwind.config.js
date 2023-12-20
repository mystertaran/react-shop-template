/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        root: '16px',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
      colors: {
        primary: '#212529',
        secondary: '#E9ECEF',
      },
      fontFamily: {
        body: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

