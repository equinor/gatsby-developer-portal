import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../../components/layout/Layout";
import { SearchEngineOptimization } from "../../components";
import { BlogPostHeader } from "./BlogPostHeader";
import PaginationList from "./PaginationList";

const BlogPostFinished = styled.div`
  padding-bottom: 40px;
`;

export default props => {
  const { pageContext, data } = props;
  const post = data.markdownRemark;
  const menuLinks = data.site.siteMetadata.menuLinks;
  const { title, date, tags } = post.frontmatter;

  return (
    <Layout location={props.location} menuLinks={menuLinks} title={title}>
      <SearchEngineOptimization title={title} description={post.excerpt} />
      <BlogPostHeader
        title={title}
        date={date}
        tags={tags}
        authors={post.fields.authors}
      />

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <BlogPostFinished />
      <PaginationList pageContext={pageContext} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      fields {
        authors {
          name
          image
        }
      }
    }
  }
`;
