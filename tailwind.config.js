/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-gray': '#f1f3f5',
            },
            screens: {
                sm: {'max': '768px'},  // от 480px до 767px
                md: {'min': '769px', 'max': '1024px'}, // от 768px до 1023px
                lg: {'min': '1025px', 'max': '1280px'}, // от 1024px до 1279px
                xl: {'min': '1281px', 'max': '1440px'}, // от 1280px до 1439px
                '2xl': {'min': '1441px', 'max': '1920px'}, // от 1440px до 1919px
                '3xl': '1921px',
            },
        },
        keyframes: {
            tilt: {
                '0%': {transform: 'rotate(0deg)'},
                '25%': {transform: 'rotate(-5deg)'},
                '50%': {transform: 'rotate(0deg)'},
                '75%': {transform: 'rotate(5deg)'},
                '100%': {transform: 'rotate(0deg)'},
            },
        },
        animation: {
            'tilt-on-hover': 'tilt 0.3s ease-in-out forwards',
        },
    },
    plugins: [],
};
