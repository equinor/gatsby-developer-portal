import React, { useState } from "react";
import { graphql } from "gatsby";
import { Col, Row } from "react-styled-flexboxgrid";

import { Layout } from "../ui";
import {
  TagFilter,
  BlogListing,
  SearchEngineOptimization,
} from "../components";
import { filterTags, initializeSelectedTags } from "../util/tagUtil";

export default props => {
  const { data, location } = props;
  const posts = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const stateTag = location.state && location.state.tag;
  // const params = decodeURI(location.search);
  // const paramTag = params && params.slice(params.indexOf('=')+1);

  const { title, subTitle, menuLinks } = data.site.siteMetadata;
  const [selectedTags, setSelectedTags] = useState(
    initializeSelectedTags(tags, stateTag)
  );

  let filteredPosts = posts.filter(filterTags(selectedTags));

  return (
    <Layout
      location={location}
      title={`${title}`}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <SearchEngineOptimization title="All blogs" keywords={["blog"]} />

      <TagFilter
        selectedTags={selectedTags}
        tags={tags}
        setSelectedTags={setSelectedTags}
      />

      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          {filteredPosts.map(({ node }) => (
            <BlogListing
              key={node.fields.slug}
              node={node}
              onTagClick={value => {
                setSelectedTags(
                  selectedTags.map(tag => {
                    tag.selected = value === tag.name;
                    return tag;
                  })
                );
              }}
            />
          ))}
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
