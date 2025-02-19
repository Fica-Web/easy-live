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
        'ternary': '#4F76AE',
        'pink': '#FDECF0',
        'brown': '#632231',
        'easy-primary-light': '#CFEBE6',
        'easy-primary-dark': '#A5D9CE',
        'easy-secondary': '#28BFC5',
        'dark-green': '#003E52'
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

