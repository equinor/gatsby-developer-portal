import React from 'react'
import {Link, graphql} from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components';


const BlogPost = styled.div`
  margin-bottom: 40px;
`;

const BlogPostHeader = styled.h3`
  margin-bottom: 0px;
`;


class BlogIndex extends React.Component {
    render() {
        const {
            data,
            location
        } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const subTitle = data.site.siteMetadata.subTitle;
        const posts = data.allMarkdownRemark.edges;
        return (
            <Layout
                location={location}
                title={siteTitle}
                subTitle={subTitle}>
                <SEO
                    title="For developers @ Equinor"
                    keywords={[`blog`]}
                />
                {posts.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    return (
                        <BlogPost key={node.fields.slug}>
                            <BlogPostHeader>
                                <Link to={node.fields.slug}>
                                    {title}
                                </Link>
                            </BlogPostHeader>
                            <small>{node.frontmatter.date}</small>
                            {node.frontmatter.authors && <Bio authors={node.frontmatter.authors}/>}
                            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                            <hr />
                        </BlogPost>
                    )
                })}

            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            authors
          }
        }
      }
    }
  }
`;
