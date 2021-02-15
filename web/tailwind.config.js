module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'brand-black': '#404040',
            'brand-black-alt': '#343434',
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
