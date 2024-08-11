/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-site": "#A1B3D1",
        "animation-navbar": "#56B8D1",
        "couleur-navbar-autour": "#D5D4E5",
        "bg-navbar" : "#D5D4E5"
      },

    },
  },
  plugins: [],
}

