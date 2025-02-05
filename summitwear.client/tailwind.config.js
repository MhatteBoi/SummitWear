/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#2a5b64',
        rustOrange: '#d46c11',
        accent: '#bf8118',
        bgGray: '#121212',
        textLight: '#f9f9f9',
      },
    },
  },
  plugins: [],
}

