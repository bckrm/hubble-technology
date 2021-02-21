module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'black-1': '#151417',
            'black-2': '#343434',
            'black-3': '#404040',
            green: '#00A09B',
            white: '#ffffff',
            black: '#404040',
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
        minHeight: {
            '1/2-screen': '50vh',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
