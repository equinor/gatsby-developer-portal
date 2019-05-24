import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Authors } from ".";
import { Col } from "react-styled-flexboxgrid";
import { style } from "../ui";
import { BlogTag } from "./Tags";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 17px;
  a {
    font-size: ${style.typography.xxxl};
    font-weight: 400;
    letter-spacing: -0.08px;
    line-height: 36px;
  }
`;

const Excerpt = styled.p`
  font-size: ${style.typography.lg};
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

  //remove this when we actually have a real picture in at least one blogpost.
  const showImage = imgFixed && imgFixed.src.indexOf("Empty.png") === 0;

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
            style={{
              width: "100%",
              minHeight: showImage ? imgHeight : 0,
              marginBottom: 20,
            }}
          >
            {imgFixed && showImage && (
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
