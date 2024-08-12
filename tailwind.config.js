/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "jauneLeger": "#F2F3C1",
        "bleuFonce": "#06708E",
        "vert" : "#01A98D",
      },
      height:{
        "taille-box-body": "662px"
      }
    },
  },
  plugins: [],
}

