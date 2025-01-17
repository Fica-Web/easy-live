/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DD1C64',
        'secondary': '#F598A6',
        'ternary': '#4F76AE'
      },
      fontFamily: {
        custom: ['Recoleta', 'sans-serif'],
        regular: ['Recoleta Alt', 'sans-serif'],
        semiBold: ['Recoleta semi', 'sans-serif']
      }
    },
  },
  plugins: [],
}

