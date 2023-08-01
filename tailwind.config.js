/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     md:'4rem',
    //     lg: '4rem',
    //     xl: '6rem',
    //     '2xl': '6rem',
    //   }
    // },
  },
  plugins: [require("daisyui")],
}