import React, { useReducer } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import { filterTags, TagFilter } from "../components/TagListing";
import { Col, Row } from "react-styled-flexboxgrid";
import BlogListing from "../components/BlogListing";
import {
  INITIAL_SELECTED_TAGS,
  searchReducer,
} from "../reducers/SearchReducer";

export default props => {
  const { data, location } = props;
  const [state, dispatch] = useReducer(searchReducer, {
    selectedTags: INITIAL_SELECTED_TAGS,
  });
  const { title, subTitle, menuLinks } = data.site.siteMetadata;

  const posts = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const filteredPosts = posts.filter(filterTags(state.selectedTags));

  return (
    <Layout
      location={location}
      title={`${title}`}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <SearchEngineOptimization title="All blogs" keywords={["blog"]} />

      <TagFilter
        dispatch={dispatch}
        tags={tags}
        selectedTags={state.selectedTags}
      />

      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          <BlogListing nodes={filteredPosts} />
        </Col>
      </Row>
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
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
