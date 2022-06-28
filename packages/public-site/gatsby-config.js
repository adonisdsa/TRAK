module.exports = {
    siteMetadata: {
        title: `Blue Flag | Vehicle Data Platform`,
        siteUrl: 'https://blueflag.com.au',
        description: `Access to vehicle data, made simple`,
        author: `Blue Flag`,
    },
    plugins: [
        `gatsby-plugin-preload-fonts`,
        // {
        //     resolve: `gatsby-plugin-prefetch-google-fonts`,
        //     options: {
        //         fonts: [
        //             {
        //                 family: `Open Sans`,
        //                 variants: [`300`, `400`, `700`, `800`],
        //             },
        //             {
        //                 family: `Source Code Pro`,
        //                 variants: [`300`, `400`, `700`],
        //             },
        //         ],
        //     },
        // },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: ['/private/**/*', '/public/**/*', '/nevdis/vin-or-chassis-number/', '/blueflag-nevdis-generalterms/', '/blueflag-generalterms/'],
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://blueflag.com.au',
                sitemap: 'https://blueflag.com.au/sitemap.xml',
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: ['/private/*,/public/*'],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'blueflag-api-website',
                region: 'ap-southeast-2',
                protocol: 'https',
                hostname: 'blueflag.com.au',
                params: {
                    '**/**.woff': {
                        CacheControl: 'no-store, no-cache',
                        Pragma: 'no-cache',
                    },
                    '**/**.woff2': {
                        CacheControl: 'no-store, no-cache',
                        Pragma: 'no-cache',
                    },
                    'icons/**/**.png': {
                        CacheControl: 'public, max-age=31536000, immutable',
                        Pragma: 'no-cache',
                    },
                    '**/**.jpg': {
                        CacheControl: 'public, max-age=31536000, immutable',
                        Pragma: 'no-cache',
                    },
                    '**/**.svg': {
                        CacheControl: 'public, max-age=31536000, immutable',
                        Pragma: 'no-cache',
                    },
                    'manifest.webmanifest': {
                        CacheControl: 'public, max-age=0, must-revalidate',
                        Pragma: 'no-cache',
                    },
                    '**/**.json': {
                        CacheControl: 'public, max-age=31536000, immutable',
                        Pragma: 'no-cache',
                    },
                },

                mergeCachingParams: true,
                removeNonexistentObjects: true,
                generateRoutingRules: true,
                generateRedirectObjectsForPermanentRedirects: true,
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-TLR5CTB',
                includeInDevelopment: false,
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-reading-time`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-source-fontawesome`,
        `gatsby-alias-imports`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Blue Flag`,
                short_name: `Blue Flag`,
                start_url: `/`,
                background_color: `#002028`,
                theme_color: `#05BEFF`,
                display: `minimal-ui`,
                icon: `static/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 810,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-hubspot',
            options: {
                trackingCode: '19517217',
                respectDNT: false,
                productionOnly: true,
            },
        },
        {
            resolve: `gatsby-plugin-fullstory`,
            options: {
                fs_org: '18VJ7D',
            },
        },
    ],
};
