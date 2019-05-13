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
  const { categories } = props;

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

  const categoryComponents = categories.map((category, index) => {
    const Icon = getIcon(category.slug);

    return (
      <Col
        md={4}
        sm={6}
        xs={12}
        key={"category-" + category.slug}
        style={{ marginTop: 50 }}
      >
        <Icon style={iconStyle} />
        <CategoryTitle>
          <Link to={"/docs/" + category.slug}>{category.title}</Link>
        </CategoryTitle>
        <div>{category.description}</div>
      </Col>
    );
  });

  return <Row>{categoryComponents}</Row>;
};

export { Categories };

export function getIcon(slug) {
  switch (slug) {
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
      throw `icon type ${slug} is not supported. `;
  }
}
