/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'very-tight': '0.7'
      },
      boxShadow: {
        'right-bottom-medium': '2px 0 5px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.15)'
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'white-beige-50': '#F9F9F9',
        'white-beige-100:': '#d9d9d980',
        'white-beige-200': '#D9D9D9',
        'white-beige-300':'#F3F3F3',
        'beige-100': '#9B8A70',
        'beige-200': '#706556',
        'discord-100': '#5865F2',
        'twitter-100': "#1DA1F2",
        'silver-100':'#C0C0C0',
        'silver-200':'#8B8B8B'
      }
    },
  },
  plugins: [],
}