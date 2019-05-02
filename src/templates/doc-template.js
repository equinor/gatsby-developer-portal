import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Tags from "../components/TagMenu";
import styled from "styled-components";

const BlogPostFinished = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const menuLinks = this.props.data.site.siteMetadata.menuLinks;

    return (
      <Layout location={this.props.location} menuLinks={menuLinks}>
        <SearchEngineOptimization
          title={post.frontmatter.title || ""}
          description={post.excerpt || ""}
        />
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.date}</p>
        <Tags tags={post.frontmatter.tags} />
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
