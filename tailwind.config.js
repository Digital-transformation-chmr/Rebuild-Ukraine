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
        },
        keyframes: {
            tilt: {
                '0%': { transform: 'rotate(0deg)' },
                '25%': { transform: 'rotate(-5deg)' },
                '50%': { transform: 'rotate(0deg)' },
                '75%': { transform: 'rotate(5deg)' },
                '100%': { transform: 'rotate(0deg)' },
            },
        },
        animation: {
            'tilt-on-hover': 'tilt 0.3s ease-in-out forwards',
        },
    },
    plugins: [],
};
