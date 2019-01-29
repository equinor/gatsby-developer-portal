module.exports = {
    siteMetadata: {
        title: `Title`,
        subTitle: `Sub title`,
        author: `Equinor ASA`,
        description: `Site for developers`,
        siteUrl: `https://developer.equinor.com`,
        social: {
            twitter: `equinorasa`,
        },
        menuLinks: [
            {
                name: "Docs",
                link: "/"
            },
            {
                name: "Blog",
                link: "/blog"
            },
            {
                name: "Github",
                url: "https://github.com/orgs/equinor"
            },
            {
                name: "Careers",
                url: "https://www.equinor.com/en/careers/job-vacancies.html"
            },
        ]
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/docs`,
                name: `docs`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            showLineNumbers: true
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `developer.equinor.com`,
                short_name: `Developer`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-matomo',
            options: {
                siteId: '2',
                matomoUrl: 'https://matomo.sdpaks.equinor.com',
                siteUrl: 'https://developer.equinor.com'
            }
        }
    ],
};
