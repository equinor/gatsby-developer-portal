import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import SearchEngineOptimization from '../components/SearchEngineOptimization'
import Tags from '../components/TagListing';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import BlogListing from '../components/BlogListing';

class Index extends React.Component {
    render() {
        const {
            data,
            location
        } = this.props;

        const {
            title,
            subTitle,
            menuLinks
        } = data.site.siteMetadata;

        const posts = data.allMarkdownRemark.edges;
        const tags = data.allMarkdownRemark.group;

        return (
            <Layout
                location={location}
                title={`${title}`}
                subTitle={subTitle}
                menuLinks={menuLinks}>
                <SearchEngineOptimization
                    title="All blogs"
                    keywords={[
                        "blog"
                    ]}
                />

                <Tags tags={tags}/>

                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <BlogListing nodes={posts}/>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index

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
      sort: {
       fields: [frontmatter___date], order: DESC
      }) {
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
          }
        }
      }
    }
  }
`;
