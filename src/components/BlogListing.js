import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Authors } from "../components/Bio";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Style from "../ui/style";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Tags = styled.div``;

const Tag = styled.span`
  font-size: ${Style.typography.xs};
  font-weight: 500;
  line-height: 14px;
  color: ${Style.colors.mossGreen};
  text-transform: uppercase;

  span {
    font-size: 25px;
    color: black;
    font-weight: 200;
    padding: 0 2px 0 10px;
  }
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
  margin-bottom: 40px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #f2f2f2;
  margin: 20px 0;
`;

const TimeDate = styled.div`
  font-size: ${Style.typography.sm};
  color: ${Style.colors.lightGray};
`;

const BlogListing = ({ nodes }) =>
  nodes.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;

    const tags = node.frontmatter.tags.map((tag, index) => {
      return (
        <Tag key={`${tag}-${index}`}>
          {" "}
          <span>/</span> {tag}{" "}
        </Tag>
      );
    });

    return (
      <Container key={node.fields.slug}>
        <Col xs={12} md={10} mdOffset={1}>
          <div
            style={{
              display: "flex",
            }}
          >
            <TimeDate>{node.frontmatter.date}</TimeDate>

            <Tags>{tags}</Tags>
          </div>

          <Title>
            <Link to={`${node.fields.collection}${node.fields.slug}`}>
              {title}
            </Link>
          </Title>

          <div>
            {/* Image */}

            <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>

          {node.fields.authors && <Authors authors={node.fields.authors} />}
        </Col>
        <Divider />
      </Container>
    );
  });

export default BlogListing;
