import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout } from "../../ui";
import { DocHeader, SearchEngineOptimization } from "../../components";

const BlogPostFinished = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const props = this.props;
    const {
      markdownRemark: { frontmatter },
    } = props.data;
    const post = this.props.data.markdownRemark;
    const { menuLinks, title } = props.data.site.siteMetadata;

    return (
      <Layout location={props.location} menuLinks={menuLinks} title={title}>
        <SearchEngineOptimization
          title={post.frontmatter.title || ""}
          description={post.excerpt || ""}
        />
        <DocHeader tags={frontmatter.tags} title={frontmatter.title} />
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
