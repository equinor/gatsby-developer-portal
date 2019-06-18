import React from "react";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import DocListing from "../components/DocListing";

export default props => {
  const { data, location } = props;
  const { title, subTitle, menuLinks } = data.site.siteMetadata;
  const docs = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags === null;
  });
  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <div>
        {docs.map(({ node }) => {
          return (
            <div style={{ margin: 20 }}>
              <DocListing node={node} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        menuLinks {
          name
          link
          url
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { in: ["docs"] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
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
`;
