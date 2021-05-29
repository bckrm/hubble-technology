module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            minHeight: {
                '1/2-screen': '50vh',
                '80vh': '80vh',
            },
        },
        colors: {
            'black-1': '#151417',
            'black-2': '#343434',
            'black-3': '#404040',
            'gray-1': '#f9f9f9',
            'gray-2': '#AEAEAE',
            hoverGreen: '#027874',
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
