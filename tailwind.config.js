/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
      },
      gridTemplateRows:{
        'page': '0.5fr auto 1fr'
      },
      fontSize:{
        'mob-base': '1rem',
        'tab-base': '1.2rem',
        'lap-base': '1.4rem',
        'mob-para': '1.2rem',
        'tab-para': '1.4rem',
        'lap-para': '1.6rem',
      }
    },
  },
  plugins: [],
}