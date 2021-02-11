require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: 'Hubble Technology',
        siteUrl: 'https://hubble-technology.netlify.app',
        description: `Hubble's feature-rich digital asset intelligence platform provides an organization with a comprehensive view of its assets and the relationships between them.`,
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-background-image',
            options: {
                // add your own characters to escape, replacing the default ':/'
                specialChars: '/:',
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
            },
        },
    ],
};
