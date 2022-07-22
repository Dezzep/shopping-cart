/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opTransition: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5'},
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
