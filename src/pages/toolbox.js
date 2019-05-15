import React from "react";
import { graphql } from "gatsby";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import style from "../ui/style";
import { HighlightedDocumentItem } from "../ui/components/HighlightedDocumentItem";
import { Categories } from "../ui/components/Categories";
import { FullWidth } from "../ui/components/FullWidth";

const { colors } = style;

const HighlightedDocuments = props => {
  const { items } = props;
  return (
    <Grid style={{ width: "100%" }}>
      <Row style={{ transform: `translate(0, -50%)` }}>
        {items.map(item => {
          const {
            frontmatter: { title },
            fields: { slug, collection },
          } = item.node;
          const to = `/${collection}${slug}`;
          return (
            <Col key={`highlighted-${title}`} md={3} xs={6}>
              <HighlightedDocumentItem key={title} title={title} to={to} />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};

const Header = props => {
  const HeaderTitle = styled.span`
    padding-bottom: 30px;
    border-bottom: 4px solid ${colors.energyRed};
  `;

  const HeaderWrapper = styled.div`
    font-family: Equinor;
    font-size: 48px;
    letter-spacing: -0.1px;
    line-height: 52px;
    text-align: center;
    padding-bottom: 40px; /* match title border distance */
  `;

  const HeaderBox = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 150px;
  `;
  return (
    <HeaderBox>
      <HeaderWrapper>
        <HeaderTitle>{props.title}</HeaderTitle>
      </HeaderWrapper>
    </HeaderBox>
  );
};

export default props => {
  const { data, location } = props;

  const { title, subTitle, menuLinks } = data.site.siteMetadata;

  const docs = data.allMarkdownRemark.edges;

  const highlightedItems = docs.filter(
    ({ node }) => node.frontmatter.featuredDocument
  );

  const nodes = docs
    .filter(doc => {
      const pathLength = doc.node.fields.slug.match(/\//g).length;
      return pathLength === 2;
    })
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
      <FullWidth backgroundColor={style.colors.mistBlue}>
        <Header title="Toolbox" highlightedItems={highlightedItems} />
      </FullWidth>
      <HighlightedDocuments items={highlightedItems} />
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
      filter: { fields: { collection: { eq: "docs" } } }
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
