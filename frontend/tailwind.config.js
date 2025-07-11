import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meaculpa: ['"Mea Culpa"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        leaguescript: ['"League Script"', 'cursive'],
        ebgaramond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [daisyui],
}
