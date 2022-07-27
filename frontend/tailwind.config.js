/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors:{
        background: "#1D1D2E",
        primary: "#FF3F4B",
        secondaty: "#3FFFA3",
        inputbg: "#101026",
        border: "#8A8A8A"
      },
    },
  },
  plugins: [],
}
