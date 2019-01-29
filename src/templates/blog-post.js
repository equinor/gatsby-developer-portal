import React from 'react'
import {Link, graphql} from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Tags from '../components/tags'
import styled from 'styled-components';

const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const BlogPostFinished = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Authors = styled.div`
  
`;

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const {previous, next} = this.props.pageContext;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title={post.frontmatter.title} description={post.excerpt}/>
                <h1>{post.frontmatter.title}</h1>
                <p>
                    {post.frontmatter.date}
                </p>
                <Tags tags={post.frontmatter.tags}/>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                <BlogPostFinished/>
                {post.frontmatter.authors && <Bio authors={post.frontmatter.authors}/>}
                <PaginationList>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <div>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </div>
                </PaginationList>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        authors
      }
    }
  }
`;
