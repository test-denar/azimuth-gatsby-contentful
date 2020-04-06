module.exports = {
    pathPrefix: '/',
    siteMetadata: {},
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
                accessToken: process.env.CONTENTFUL_PREVIEW ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
                host: process.env.CONTENTFUL_PREVIEW ? 'preview.contentful.com' : 'cdn.contentful.com',
                useNameForId: false
            }
        },
        {
            resolve: 'gatsby-plugin-schema-snapshot',
            options: {
                path: 'schema.gql',
                exclude: {
                    plugins: ['gatsby-source-npm-package-search']
                },
                update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT
            }
        }
    ]
};
