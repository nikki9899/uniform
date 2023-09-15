/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        uniform : '0 0 100px 1px black'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)']
      },
      colors: {
        background: '#EFEFEF',
        popularTextColor : "#1E1E1E",
        popularType : "#9A9B9C"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "customBrown": "#C46145",
      },
      fontFamily: {
        'made-outer-sans': "MADE Outer Sans"
      },
    },

  },
  plugins: [],
};
