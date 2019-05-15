import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Tags from "../components/TagListing";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import NodeListing from "../components/NodeListing";
import Card from "../ui/components/Card";

class Index extends React.Component {
  render() {
    const { data, location } = this.props;

    const { title, subTitle, menuLinks } = data.site.siteMetadata;

    const docs = data.allMarkdownRemark.edges;
    const tags = data.allMarkdownRemark.group;

    return (
      <Layout
        location={location}
        title={title}
        subTitle={subTitle}
        menuLinks={menuLinks}
      >
        <SearchEngineOptimization title="All docs" keywords={["docs"]} />
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <NodeListing nodes={docs} />
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default Index;

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
