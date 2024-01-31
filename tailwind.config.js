/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueish': '#2a68ff',
        'grey': '#f1f4f8',
        'greyish': '#f6f6f7',
        'brownish': '#3c3c43',
        'brownbish': '#67676c',
        'greenish': '#6f9c76',
        'yellowish': '#fecc6b',
        'dark-yellow': '#d9a152',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

