/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pry-dark': "#111518",
        'pry-s-dark': "#212528",
        'seco-dark': "#d5ad6f",
        'mony-dark': '#38bdf8',
        
        'pry': "#f1f5f8",
        'pry-s': "#e1e5e8",
        'seco': "#b58d4f",
        'mony': '#0369a1'
      },
    },
  },
  plugins: [],
};
