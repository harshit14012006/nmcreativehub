/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files
    ],
    theme: {
      extend: {
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
          },
      },
    },
    plugins: [],
  }
  