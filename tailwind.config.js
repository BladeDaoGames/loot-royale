/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'white-beige-50': '#F9F9F9',
        'white-beige-100:': '#d9d9d980',
        'white-beige-200': '#D9D9D9',
        'beige-100': '#9B8A70',
        'beige-200': '#706556',
        'discord-100': '#5865F2',
        'twitter-100': "#1DA1F2"
      }
    },
  },
  plugins: [],
}