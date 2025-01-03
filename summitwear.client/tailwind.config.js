/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        navyBlue: '#2a5b64', // Light mode primary
        rustOrange: '#d46c11', // Light mode secondary
        accent: '#bf8118', // Light mode accent
        bgGray: '#121212', // Light mode background
        textLight: '#f9f9f9', // Light mode text
      },
  },
  },
  plugins: [],
}

