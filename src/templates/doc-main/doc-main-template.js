import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../ui";
import Footer from "./Footer";
import { DocHeader } from "../../components";

export default props => {
  const {
    data,
    location,
    pageContext: { slug },
  } = props;
  const post = data.markdownRemark;
  const menuLinks = data.site.siteMetadata.menuLinks;

  const { title, tags } = post.frontmatter;

  return (
    <Layout location={location} menuLinks={menuLinks} title={title}>
      <DocHeader title={title} tags={tags} slug={slug} />
      <div
        style={{ padding: "40px 0" }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer slug={slug} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query DocMainTemplate($slug: String!) {
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
