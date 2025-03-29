/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4b6bfb',
          DEFAULT: '#3050e0',
          dark: '#243dbd',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}; 