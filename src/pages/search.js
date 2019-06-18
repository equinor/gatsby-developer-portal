import React, { useReducer, useState } from "react";
import { graphql } from "gatsby";

import { TagFilter } from "../components";
import { filterTags } from "../util/tagUtil";
import { SearchInput } from "./search/_SearchInput";
import { Results } from "./search/_Results";
import Layout from "../components/layout/Layout";
import {
  initializeState,
  tagFilterReducer,
} from "../components/TagFilterReducer";

export default props => {
  const { data, location } = props;
  const { title, subTitle, menuLinks } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const [query, setQuery] = useState("");
  const [filterState, dispatchFilterAction] = useReducer(
    tagFilterReducer,
    initializeState(tags)
  );

  const postsFiltered = posts.filter(filterTags(filterState.selectedTags));
  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <div style={{ marginTop: 30, marginBottom: 150 }}>
        <div style={{ marginBottom: 40 }}>
          <SearchInput value={query} onChange={setQuery} />
        </div>
        <TagFilter
          tags={tags}
          dispatch={dispatchFilterAction}
          state={filterState}
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
