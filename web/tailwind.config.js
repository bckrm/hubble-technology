module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            black: '#404040',
            'black-1': '#151417',
            'black-2': '#343434',
            white: '#ffffff',
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
