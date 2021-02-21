module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'black-1': '#151417',
            'black-2': '#343434',
            green: '#00A09B',
            white: '#ffffff',
            black: '#404040',
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
