const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const fetch = require("node-fetch");
const fetchBase64 = require("fetch-base64");

require("dotenv").config({
  path: ".env",
});

// Context: will be passed in to the page query as graphql variables.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  async function createBlogPages() {
    const blogTemplate = path.resolve(`./src/templates/blog-template.js`);
    const result = await graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "blog" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `);

    if (result.errors) {
      console.log(result.errors);
      throw new Error("Things broke, see console output above");
    }

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: `${post.node.fields.collection}${post.node.fields.slug}`,
        component: blogTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  }

  async function createTagPages() {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        node.frontmatter.tags &&
          node.frontmatter.tags.forEach(tag => {
            createPage({
              path: `/tags/${_.kebabCase(tag)}/`,
              component: path.resolve(`./src/templates/tag-template.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                tag,
              },
            });
          });
      });
    });
  }

  async function createDocPages() {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "docs" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
                tags
                featuredDocument
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          //create subpages
          createPage({
            path: `${node.fields.collection}${node.fields.slug}`,
            component: path.resolve("src/templates/doc-template.js"),
            context: {
              slug: node.fields.slug,
            },
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function createDocThemePages() {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "docs-theme" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
                tags
                featuredDocument
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          //create subpages
          createPage({
            path: `${node.fields.collection}${node.fields.slug}`,
            component: path.resolve("src/templates/doc-main-template.js"),
            context: {
              slug: node.fields.slug,
            },
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  await createBlogPages();
  await createDocPages();
  await createDocThemePages();
  await createTagPages();
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }

  if (node.internal.type === `MarkdownRemark`) {
    const authors = node.frontmatter.authors;
    const config = {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
      },
    };
    const data = [];
    const getProfile = author =>
      fetch("https://api.github.com/users/" + author, config);

    if (authors) {
      for (let i = 0; i < authors.length; i++) {
        const response = await getProfile(authors[i]);
        const json = await response.json();
        const image = await fetchBase64.remote(json.avatar_url);
        console.log("downloaded avatar", authors[i]);
        data.push({
          image: image[1],
          name: json.name,
        });
      }
    }

    createNodeField({
      name: `authors`,
      node,
      value: data,
    });
  }
};
