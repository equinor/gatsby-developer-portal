/*
https://www.gatsbyjs.org/packages/gatsby-plugin-tags/
 */

import Layout from '../components/Layout'
import React from "react";
import PropTypes from "prop-types";
import {
    Link,
    graphql
} from "gatsby";

const Tags = ({pageContext, data, location}) => {
    const {tag} = pageContext;
    const {edges, totalCount} = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`;
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({node}) => {
                    const {path, title} = node.frontmatter;
                    return (
                        <li key={path}>
                            <Link to={path}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/tags">All tags</Link>
        </Layout>
    )
};

Tags.propTypes = {
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

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
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
          frontmatter {
            title
          }
        }
      }
    }
  }
`
