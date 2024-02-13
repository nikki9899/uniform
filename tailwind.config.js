/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs':'380px',

            },
           
            boxShadow: {
                uniform: '0 0 100px 1px black',
            },
            fontFamily: {
                manrope: ['var(--font-manrope)'],
            },
            colors: {
                background: '#EFEFEF',
                textColor : '#1E1E1E'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                customBrown: '#C46145',
            },
        },
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                '.scrollbar': {
                    overflowY: 'auto',
                    scrollbarColor: `${theme('colors.black.600')} ${theme(
                        'colors.black.200'
                    )}`,
                    scrollbarWidth: 'thin',
                },
                '.scrollbar::-webkit-scrollbar': {
                    height: '10px',
                    width: '2px',
                },
                '.scrollbar::-webkit-scrollbar-thumb': {
                    backgroundColor: theme('colors.black'),
                    borderRadius: '50px',
                },
                '.scrollbar::-webkit-scrollbar-track-piece': {
                    backgroundColor: theme('colors.gray.200'),
                },
            })
        }),
    ],
}
