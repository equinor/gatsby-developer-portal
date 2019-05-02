import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Tags from "../components/TagMenu";
import styled from "styled-components";
import { Authors } from "../components/Bio";

const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const BlogPostFinished = styled.div`
  padding-bottom: 40px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const menuLinks = this.props.data.site.siteMetadata.menuLinks;
    const { previous, next } = this.props.pageContext;

    const { title, date, tags } = post.frontmatter;

    return (
      <Layout location={this.props.location} menuLinks={menuLinks}>
        <SearchEngineOptimization title={title} description={post.excerpt} />
        <h3>{title}</h3>
        <p>{date}</p>
        <Tags tags={tags} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <BlogPostFinished />
        {post.fields.authors && <Authors authors={post.fields.authors} />}
        <PaginationList>
          <li>
            {previous && (
              <Link
                to={`${previous.fields.collection}${previous.fields.slug}`}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <div>
            {next && (
              <Link
                to={`${next.fields.collection}${next.fields.slug}`}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </PaginationList>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

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
