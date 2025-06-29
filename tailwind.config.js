/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-accent': '#f97316', // tu color naranja personalizado
        'custom-dark': '#000000',   // <- aquí defines el negro como color base
      },
    },
  },
  plugins: [],
};
