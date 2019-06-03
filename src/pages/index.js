import React from "react";
import { graphql } from "gatsby";
import { Grid } from "react-styled-flexboxgrid";

import { colors } from "../ui";
import {
  FullWidth,
  Categories,
  SearchEngineOptimization,
  HeaderTitle,
} from "../components";
import Layout from "../components/layout/Layout";

export default props => {
  const { data, location } = props;

  const { title, subTitle, menuLinks } = data.site.siteMetadata;

  const docs = data.allMarkdownRemark.edges;
  const nodes = docs
    .filter(({ node }) => node.fields.collection === "docs-theme")
    .sort((a, b) =>
      a.node.frontmatter.title.localeCompare(b.node.frontmatter.title)
    );

  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <SearchEngineOptimization title="All docs" keywords={["docs"]} />
      <FullWidth backgroundColor={colors.mistBlue}>
        <div style={{ padding: "70px 0 140px" }}>
          <HeaderTitle
            title="For developers - by developers"
            alignCenter={true}
          />
        </div>
      </FullWidth>
      <Grid style={{ width: "100%" }}>
        <Categories nodes={nodes} />
      </Grid>
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
      filter: { fields: { collection: { in: ["docs", "docs-theme"] } } }
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
          }
          frontmatter {
            title
            tags
            featuredDocument
          }
        }
      }
    }
  }
`;
