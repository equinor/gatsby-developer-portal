import React, { useState } from "react";
import { graphql } from "gatsby";

import { TagFilter } from "../components";
import { filterTags, initializeSelectedTags } from "../util/tagUtil";
import { SearchInput } from "./search/_SearchInput";
import { Results } from "./search/_Results";
import Layout from "../components/layout/Layout";

export default props => {
  const { data, location } = props;
  const { title, subTitle, menuLinks } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState(
    initializeSelectedTags(tags)
  );

  const postsFiltered = posts.filter(filterTags(selectedTags));
  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <div style={{ marginTop: 30, marginBottom: 150 }}>
        <SearchInput value={query} onChange={setQuery} />
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Results query={query} posts={postsFiltered} />
      </div>
    </Layout>
  );
};

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
            featuredImage {
              childImageSharp {
                fixed(width: 200, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
