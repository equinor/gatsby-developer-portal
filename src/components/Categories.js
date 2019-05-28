import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";
import { getIcon } from "../util/iconUtil";

const Categories = props => {
  const { nodes } = props;

  const CategoryTitle = styled.div`
    color: #333333;
    font-size: 30px;
    letter-spacing: -0.08px;
    line-height: 36px;
    margin-top: 5px;
    margin-bottom: 15px;
  `;

  const IconStyle = styled.div`
    margin: 0 auto;
  `;

  const categoryComponents = nodes.map(({ node }, index) => {
    const {
      frontmatter: { title, tags },
      fields: { slug, collection },
    } = node;
    const iconTag = tags && tags.length > 0 ? tags[0] : "";
    const Icon = getIcon(iconTag);
    return (
      <Col
        md={4}
        sm={6}
        xs={12}
        key={"category-" + node.fields.slug + index}
        style={{ marginTop: 50 }}
      >
        <IconStyle>
          <Icon />
        </IconStyle>
        <CategoryTitle>
          <Link to={`/${collection}${slug}`}>{title}</Link>
        </CategoryTitle>
        <div>{node.excerpt}</div>
      </Col>
    );
  });

  return <Row>{categoryComponents}</Row>;
};

export { Categories };
