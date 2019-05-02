import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import styled from "styled-components";
import { Categories } from "../ui/components/Categories";
import { HighlightedDocumentItem } from "../ui/components/HighlightedDocumentItem";
import style from "../ui/style";
import useDimensions from "react-use-dimensions";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

const { colors } = style;

const HighlightedDocuments = props => {
  const { items, width } = props;
  return (
    <Grid style={{ width }}>
      <Row style={{ width: "100%", transform: `translate(0, -50%)` }}>
        {items.map((title, index) => {
          return (
            <Col key={index + title} md={3} xs={6}>
              <HighlightedDocumentItem key={title} title={title} />
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
    background-color: ${colors.mistBlue};
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

  //@todo use docs and tags to extract highlighted documents and categories.
  const docs = data.allMarkdownRemark.edges;
  const tags = data.allMarkdownRemark.group;

  const highlightedItems = ["Api", "Security", "Open Source", "Api Principles"];

  const categories = [
    {
      title: "Api",
      type: "api",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel euismod lorem.",
    },
    {
      title: "Open Source",
      type: "open source",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel euismod lorem.",
    },
    {
      title: "Security",
      type: "security",
      description:
        "Phasellus tincidunt scelerisque arcu, id pretium metus pharetra et. Praesent sit amet aliquet enim.",
    },
    {
      title: "Tech",
      type: "tech",
      description:
        "Phasellus fermentum, dolor ac mattis tristique, purus est pretium erat, pulvinar sollicitudin arcu purus in leo. ",
    },
    {
      title: "Design",
      type: "design",
      description:
        "Phasellus vel euismod lorem. Duis condimentum risus sit amet cursus rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Api Principles",
      type: "api",
      description:
        "Phasellus tincidunt scelerisque arcu, id pretium metus pharetra et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  /* The header's background need to fill the full width of the page. 
     Dimension hook is used to measure the content of this page (root container)
     Toolbox.left:  adjust background image to correct position.
     Toolbox.width: reset nested div which now has a full page width.
  */
  const [toolboxRef, toolboxSize] = useDimensions();
  const [pageRef, pageSize] = useDimensions();

  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <SearchEngineOptimization title="All docs" keywords={["docs"]} />
      <div ref={toolboxRef}>
        {//hack to avoid flickering (caused by full background header) before pageSize is measured.
        pageSize.width && (
          <div
            style={{
              position: "relative",
              width: "100vw",
              marginLeft: -toolboxSize.left || 0,
            }}
          >
            <Header title="Toolbox" highlightedItems={highlightedItems} />
            <HighlightedDocuments
              width={pageSize.width}
              items={highlightedItems}
            />
            <Grid style={{ width: pageSize.width, marginBottom: 100 }}>
              <Categories categories={categories} />
            </Grid>
          </div>
        )}
        {//hack to push footer out of sight during first render.
        !pageSize.width && <div style={{ height: "100vh" }} />}
        <div ref={pageRef} style={{ width: "100%" }} />
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
          }
        }
      }
    }
  }
`;
