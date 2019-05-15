import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import SearchEngineOptimization from "../components/SearchEngineOptimization";
import styled from "styled-components";
import { Authors } from "../components/Bio";
import style from "../ui/style";
import { BlogTag } from "../ui/components/Tags";
import { FullWidth } from "../ui/components/FullWidth";

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

const BlogPostHeader = props => {
  const { title, date, tags, authors } = props;

  const Wrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
  `;

  const Title = styled.div`
    color: #333333;
    font-family: Equinor;
    font-size: 48px;
    letter-spacing: -0.1px;
    line-height: 52px;
    margin-top: 20px;
  `;

  const Delimiter = styled.div`
    border-bottom: 3px solid red;
    margin: 20px 0 30px;
    width: 20%;
    color: ${style.colors.energyRed}
    max-width: 250px;
  `;

  return (
    <Wrapper>
      <BlogTag tags={tags} date={date} to="/blog" />
      <Title>{title}</Title>
      <Delimiter />
      <div>{authors && <Authors authors={authors} />}</div>
    </Wrapper>
  );
};

export default props => {
  const post = props.data.markdownRemark;
  const menuLinks = props.data.site.siteMetadata.menuLinks;
  const { previous, next } = props.pageContext;
  const { title, date, tags } = post.frontmatter;

  return (
    <Layout location={props.location} menuLinks={menuLinks} title={title}>
      <SearchEngineOptimization title={title} description={post.excerpt} />
      <FullWidth backgroundColor="#f2f2f2">
        <BlogPostHeader
          title={title}
          date={date}
          tags={tags}
          authors={post.fields.authors}
        />
      </FullWidth>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <BlogPostFinished />
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
