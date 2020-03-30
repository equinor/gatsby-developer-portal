const searchFeature = false;

module.exports = {
  siteMetadata: {
    title: `For developers - by developers `,
    subTitle: ``,
    author: `Equinor ASA`,
    description: `Site for developers`,
    siteUrl: `https://developer.equinor.com`,
    social: {
      twitter: `equinorasa`,
    },
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Github",
        url: "https://github.com/orgs/equinor",
      },
      {
        name: "Careers",
        url: "https://www.equinor.com/en/careers/job-vacancies.html",
      },
      {
        name: "Search",
        url: "/search",
      },
    ].filter(menuLink => {
      if (menuLink.name === "Search") {
        return searchFeature;
      }
      return true;
    }),
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
        path: `${__dirname}/content/docs-theme`,
        name: `docs-theme`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
        name: `images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        path: `${__dirname}/src/assets/icons/`,
        name: "icons",
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
              showLineNumbers: true,
            },
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
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://matomo.sdpaks.equinor.com",
        siteUrl: "https://developer.equinor.com",
        disableCookies: true,
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
            name: "en",
            // A function for filtering nodes. () => true by default
            filterNodes: node => {
              if (node.frontmatter) {
                return node.frontmatter;
              }
              return false;
            },
            // Add to index custom entries, that are not actually extracted from gatsby nodes
            // customEntries: [{ title: 'Pictures', content: 'awesome pictures', url: '/pictures' }],
          },
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "content", store: true },
          { name: "url", store: true },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.url,
          },
        },
        //custom index file name, default is search_index.json
        filename: "search_index.json",
      },
    },
    `gatsby-plugin-accessibilityjs`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/tags/*", "/tags"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
  ],
};
