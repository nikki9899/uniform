/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow : {
        uniform : '0 0 100px 1px black'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)']
      }
    },

  },
  plugins: [],
}
