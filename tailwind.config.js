/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        extend: {
            gradientColorStops: {
                stop1: '#57ddff',
                stop2: '#c058f3',
            },
        },
        fontFamily: {
            'josefin-sands': '["Josefin Sans", "sans-serif"]',
        },
        colors: {},
        backgroundImage: {
            'desktop-dark': 'url("/images/bg-desktop-dark.jpg")',
            'desktop-light': 'url("/images/bg-desktop-light.jpg")',
            'mobile-dark': 'url("/images/bg-mobile-dark.jpg")',
            'mobile-light': 'url("/images/bg-mobile-light.jpg")',
        },
    },
    plugins: [],
};
