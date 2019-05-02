import Layout from "../components/Layout";
import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import NodeListing from "../components/NodeListing";

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;

  const { edges, totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} tagged with "${tag}"`;

  const { menuLinks } = data.site.siteMetadata;

  return (
    <Layout location={location} menuLinks={menuLinks}>
      <h3>{tagHeader}</h3>
      <NodeListing nodes={edges} />
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            authors
          }
        }
      }
    }
  }
`;
