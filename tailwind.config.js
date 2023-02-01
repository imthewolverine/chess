/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ], // or 'media' or 'class'
    theme: {
        screens: {
            '2xl': '1320px',
        },
        fontFamily: {
            'PT-Serif-Caption': ['PT_Serif_Caption', 'serif'],
            'PT-Serif': ['PT Serif', 'serif'],
            'Poppins': ['Poppins', 'sans-serif']
        },
        boxShadow: {
            'special': '0 4px 45px rgba(0, 0, 0, 0.05)',
            'question': '20px 20px 114px rgba(0, 0, 0, 0.05)',
            'reply': '4px 0px 100px rgba(0, 0, 0, 0.05)',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}