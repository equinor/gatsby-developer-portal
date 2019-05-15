import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import ApiIcon from "../../assets/icons/Api.svg";
import OpenSourceIcon from "../../assets/icons/OpenSource.svg";
import TechIcon from "../../assets/icons/Tech.svg";
import SecurityIcon from "../../assets/icons/Security.svg";
import DesignIcon from "../../assets/icons/Design.svg";
import { Col, Row } from "react-styled-flexboxgrid";

const Categories = props => {
  const { nodes } = props;

  const CategoryTitle = styled.div`
    color: #333333;
    font-family: Equinor;
    font-size: 30px;
    letter-spacing: -0.08px;
    line-height: 36px;
    margin-top: 5px;
    margin-bottom: 15px;
  `;

  const iconStyle = {
    margin: 0,
    width: "auto",
    height: "auto",
  };

  const categoryComponents = nodes.map(({ node }) => {
    const Icon = getIcon(node.fields);
    const {
      frontmatter: { title },
      fields: { slug, collection },
    } = node;
    return (
      <Col
        md={4}
        sm={6}
        xs={12}
        key={"category-" + node.fields.slug}
        style={{ marginTop: 50 }}
      >
        <Icon style={iconStyle} />
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

export function getIcon(fields) {
  const baseSlug = fields.slug.substr(
    0,
    fields.slug.substr(1).indexOf("/") + 2
  );
  switch (baseSlug) {
    case "/api/":
      return ApiIcon;
    case "/open-source/":
      return OpenSourceIcon;
    case "/tech/":
      return TechIcon;
    case "/security/":
      return SecurityIcon;
    case "/design/":
      return DesignIcon;
    default:
      throw `icon type ${baseSlug} is not supported. `;
  }
}
