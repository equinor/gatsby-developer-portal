import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { colors } from "../ui";
import { FullWidth, Categories, SearchEngineOptimization } from "../components";
import Layout from "../components/layout/Layout";
import { BlogSummary } from "../components/BlogSummary";
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
          <div
            style={{
              height: 400,
              backgroundColor: colors.lighterGray,
              opacity: 0.5,
            }}
          />
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

  const nodes = data.allMarkdownRemark.edges;
  const docNodes = nodes
    .filter(({ node }) => node.fields.collection === "docs-theme")
    .sort((a, b) =>
      a.node.frontmatter.title.localeCompare(b.node.frontmatter.title)
    );
  const blogNodes = nodes.filter(
    ({ node }) => node.fields.collection === "blog"
  );
  //@todo sort on most recent blogpost.
  
  const hasGeneralContent =
    nodes.filter(({ node }) => node.fields.collection === "docs" && node.frontmatter.tags === null).length > 0;
  if (hasGeneralContent) {
    // A hack to catch all uncategorized content.
    // The slug needs to be manipulated since this card need to link to a separate page.
    // A misc-theme page doesn't belong in content/docs-theme,
    // also, a new folder for misc-theme seems unnecessary for now as there's no need for localisation yet.
    docNodes.push({
      node: {
        fields: {
          collection: "",
          slug: "misc-theme",
        },
        frontmatter: {
          title: "Miscellaneous",
        },
      },
    });
  }
  
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
      <Grid style={{ width: "100%", marginBottom: 100 }}>
        <Categories nodes={docNodes} />
      </Grid>
      <div style={{ marginBottom: 50 }}>
        <BlogSummary nodes={blogNodes} />
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
    allMarkdownRemark(
      filter: { fields: { collection: { in: ["docs", "docs-theme", "blog"] } } }
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
            tags
            featuredDocument
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
