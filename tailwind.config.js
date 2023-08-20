const { inset } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                SFPro: ['SFProDisplay']
            },
            screens: {
                sm: '568px',
                //@media (min-width: 568px) { /* ... */ }
                md: '769px',
                //@media (min-width: 769px) { /* ... */ }
                lg: '1041px',
                //@media (min-width: 1041px) { /* ... */ }
                xl: '1241px',
                //@media (min-width: 1241px) { /* ... */ }
            },
            boxShadow: {
                box: '0 2px 12px 0 rgba(0, 0, 0, 0.12)',
            }
        }
    }
};

