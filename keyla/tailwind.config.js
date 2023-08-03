/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColors: {
          'primary': '#121e58',
          'secondary': '#4b3b93',
          'tertiary': '#8d6ff2',
        }
      }
    },
  },
  plugins: [],
}

