import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Authors } from "../components/Bio";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Style from "../ui/style";
import { BlogTag } from "../ui/components/Tags";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 17px;
  a {
    font-size: ${Style.typography.xxxl};
    font-weight: 400;
    letter-spacing: -0.08px;
    line-height: 36px;
  }
`;

const Excerpt = styled.p`
  font-size: ${Style.typography.lg};
  line-height: 24px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #f2f2f2;
  margin: 20px 0;
`;

const BlogListing = ({ node, onTagClick }) => {
  const title = node.frontmatter.title || node.fields.slug;

  const imgFixed =
    node.frontmatter.featuredImage &&
    node.frontmatter.featuredImage.childImageSharp.fixed;
  const imgHeight = (imgFixed && imgFixed.height) || 0;
  return (
    <Container key={node.fields.slug}>
      <Col xs={12} md={10} mdOffset={1}>
        <BlogTag
          onTagClick={onTagClick}
          tags={node.frontmatter.tags}
          date={node.frontmatter.date}
        />
        <Title>
          <Link to={`/${node.fields.collection}${node.fields.slug}`}>
            {title}
          </Link>
        </Title>

        <div>
          <div
            style={{ width: "100%", minHeight: imgHeight, marginBottom: 20 }}
          >
            {imgFixed && (
              <Img
                style={{ marginRight: 30, width: 200, float: "left" }}
                fixed={imgFixed}
              />
            )}
            <Excerpt
              style={{}}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
          <div>
            {node.fields.authors && <Authors authors={node.fields.authors} />}
          </div>
        </div>
      </Col>
      <Divider />
    </Container>
  );
};

export default BlogListing;
