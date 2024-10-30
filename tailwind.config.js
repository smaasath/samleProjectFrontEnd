/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', 
        secondary: '#FBBF24', 
      },
    },
  },
  plugins: [],
}
