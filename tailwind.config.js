/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 2px 10px rgba(0,0,0,.2);'
      }
    },
  },
  plugins: [],
};
