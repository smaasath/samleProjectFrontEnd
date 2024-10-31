/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2471a3',
        secondary: '#2980b9 ',
        third: '#1f618d ',
      },
    },
  },
  plugins: [],
}
