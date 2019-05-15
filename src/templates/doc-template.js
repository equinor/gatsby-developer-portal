import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import styled from "styled-components";

const BlogPostFinished = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { menuLinks, title } = this.props.data.site.siteMetadata;

    return (
      <Layout
        location={this.props.location}
        menuLinks={menuLinks}
        title={title}
      >
        <SearchEngineOptimization
          title={post.frontmatter.title || ""}
          description={post.excerpt || ""}
        />
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <BlogPostFinished />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        authors
      }
    }
  }
`;
