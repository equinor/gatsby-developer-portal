import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import ApiCircleIcon from "../assets/icons/circle_api.svg";
import OpenSourceCircleIcon from "../assets/icons/circle_open_source.svg";
import TechCircleIcon from "../assets/icons/circle_tech.svg";
import DesignCircleIcon from "../assets/icons/circle_design.svg";

import style from "../ui/style";
import ReadMoreCard from "../components/ReadMoreCard";
import { Tag } from "../ui/components/Tags";

function getIconByTag(slug) {
  switch (slug) {
    case "/api/":
      return ApiCircleIcon;
    case "/open-source/":
      return OpenSourceCircleIcon;
    case "/tech/":
      return TechCircleIcon;
    case "/design/":
      return DesignCircleIcon;
    default:
      throw `icon type ${slug} is not supported. `;
  }
}

const Seperator = styled.div`
  height: 4px;
  width: 187px;
  margin: 25px auto 20px;
  background-color: ${style.colors.mossGreen};
`;

const Title = styled.div`
  color: #333333;
  font-family: Equinor;
  font-size: ${props => props.fontSize || 52}px;
  letter-spacing: -0.1px;
  line-height: 52px;
  text-align: center;
`;

const Header = ({ title, tags, slug }) => {
  const category = slug.substring(1, slug.substr(1).indexOf("/") + 1);
  const HeaderWrapper = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    margin-bottom: 30px;
  `;

  const IconWrapper = styled.div`
    height: 72px;
    transform: translate(0, -50%);
  `;
  const Icon = getIconByTag(slug);
  return (
    <React.Fragment>
      <HeaderWrapper>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Title>{title}</Title>
        <Seperator />

        <div style={{ margin: "10px 0 20px", textAlign: "center" }}>
          <Tag tag={category} />
        </div>
      </HeaderWrapper>
    </React.Fragment>
  );
};

const Footer = props => {
  const FooterWrapper = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    padding-top: 30px;
    margin: 30px 0;
  `;
  return (
    <FooterWrapper>
      <Title fontSize={52}>Further reading</Title>
      <Seperator />
      <ReadMoreCard slug={props.slug} />
    </FooterWrapper>
  );
};

const DocMainTemplate = props => {
  const {
    data,
    location,
    pageContext: { slug },
  } = props;
  const post = data.markdownRemark;
  const menuLinks = data.site.siteMetadata.menuLinks;

  const { title, tags } = post.frontmatter;

  return (
    <Layout location={location} menuLinks={menuLinks} title={title}>
      <Header title={title} tags={tags} slug={slug} />
      <div
        style={{ padding: "40px 0" }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer slug={slug} />
    </Layout>
  );
};

export default DocMainTemplate;

export const pageQuery = graphql`
  query DocMainTemplate($slug: String!) {
    site {
      siteMetadata {
        menuLinks {
          name
          link
          url
        }
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
