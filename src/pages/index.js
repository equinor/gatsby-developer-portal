import React from "react";
import { graphql } from "gatsby";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { colors } from "../ui";
import { FullWidth, Categories, SearchEngineOptimization } from "../components";
import Layout from "../components/layout/Layout";
import Separator from "../components/Separator";
import { Title } from "../components/Titles";

const HeaderWrapper = styled.div`
  padding-top: 50px;

  @media (min-width: 1024px) {
    transform: translate(-50%, 0);
    width: 200%;
    margin-left: 50%;
  }
`;

export const Header = props => {
  const { description } = props;
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <div style={{ height: 400, backgroundColor: colors.lighterGray }} />
        </Col>
        <Col xs={12} md={6}>
          <HeaderWrapper>
            <Title>For developers - by developers</Title>
            <Separator
              style={{ width: "30%", margin: "20px 0 40px", minWidth: 200 }}
              color={colors.energyRed}
            />
          </HeaderWrapper>

          <div style={{ marginLeft: 30 }}>{description}</div>
        </Col>
      </Row>
    </Grid>
  );
};

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
      <FullWidth>
        <Header />
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
