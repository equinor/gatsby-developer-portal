import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Authors } from "../components/Bio";
import Tags from "../components/TagListing";

const SearchInputStyle = styled.input`
  font-weight: 500;
  width: 100%;
  outline: none;
  font-size: 48px;
  letter-spacing: -0.1px;
  line-height: 52px;
  padding: 30px 0;
  text-align: center;
  background-color: rgba(255, 18, 67, 0.1);
  border: 0;
`;

const SearchInput = ({ value, onChange }) => {
  return (
    <form>
      <SearchInputStyle
        autoFocus
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};

const Result = ({ post }) => {
  const ResultTitle = styled.div`
    height: 36px;
    width: 621px;
    color: #333333;
    font-family: Equinor;
    font-size: 30px;
    letter-spacing: -0.08px;
    line-height: 36px;
  `;
  const node = post[0].node;
  const {
    frontmatter: { title, date, tags },
    fields: { authors, collection, slug },
  } = node;
  const href = `/${collection}/${slug}`;
  const tag = tags && tags.length > 0 && tags[0].toUpperCase();
  return (
    <div key={title} style={{ padding: "10px 0" }}>
      <div>
        {date} / {tag}
      </div>
      <Link to={href}>
        <ResultTitle>{title}</ResultTitle>
      </Link>
      <div>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
      <div style={{ margin: "15px 0" }}>
        <Authors authors={authors} />
      </div>
      <hr />
    </div>
  );
};

const Results = ({ query, posts }) => {
  const results = getSearchResults(query, "en");
  return (
    <div>
      {results.map(page => {
        const post = posts.filter(p => p.node.frontmatter.title === page.title);
        if (!post) {
          return;
        }
        return <Result key={page.title} post={post} />;
      })}
    </div>
  );
};

export default props => {
  const { data, location } = props;
  const { title, subTitle, menuLinks } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const [query, setQuery] = useState("");

  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <div style={{ marginTop: 30, marginBottom: 150 }}>
        <SearchInput value={query} onChange={setQuery} />
        <Tags tags={tags} />
        <Results query={query} posts={posts} />
      </div>
    </Layout>
  );
};

function getSearchResults(query, lng) {
  if (typeof window === "undefined" || !window.__LUNR__) {
    return [];
  }
  const lunrIndex = window.__LUNR__[lng];

  if (!query) {
    query = "**";
  }

  const searchQuery = `${query.trim()}~1`;
  const results = lunrIndex.index.search(searchQuery);
  return (
    results
      // .filter(result => {
      //   console.log(result);
      //   return result.score > 0.1;
      // })
      .map(({ ref }) => lunrIndex.store[ref])
  );
}

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            authors {
              name
              image
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            authors
            tags
          }
        }
      }
    }
  }
`;
