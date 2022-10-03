/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s linear infinite',
        'bounce-slow1': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
