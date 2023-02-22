/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#08121C',
                font: '#01050E',
            },
            animation: {
                blob: 'blob 10s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'rotate(0deg) scale(1, 1.1)',
                    },
                    '33%': {
                        transform: 'rotate(50deg) scale(0.9, 0.8)',
                    },
                    '66%': {
                        transform: 'rotate(200deg) scale(1.1, 1)',
                    },
                    '100%': {
                        transform: 'rotate(360deg) scale(1, 1.1)',
                    },
                },
            },
        },
    },
    plugins: [],
};
