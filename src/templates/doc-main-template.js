import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Tags from "../components/TagMenu";
import styled from "styled-components";
import ApiCircleIcon from "../assets/icons/circle_api.svg";
import OpenSourceCircleIcon from "../assets/icons/circle_open_source.svg";
import TechCircleIcon from "../assets/icons/circle_tech.svg";
import DesignCircleIcon from "../assets/icons/circle_design.svg";

import style from "../ui/style";

const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const BlogPostFinished = styled.div`
  padding-bottom: 40px;
`;

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
          <Tags tags={tags} />
        </div>
      </HeaderWrapper>
    </React.Fragment>
  );
};

const Footer = () => {
  const FooterWrapper = styled.div`
    height: 200px;
    width: 100%;
    background-color: #f2f2f2;
    padding-top: 30px;
    margin: 30px 0;
  `;
  return (
    <FooterWrapper>
      <Title fontSize={52}>Further reading</Title>
      <Seperator />
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
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </Layout>
  );
};

export default DocMainTemplate;

export const pageQuery = graphql`
  query DocMainPost($slug: String!) {
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
      fields {
        authors {
          name
          image
        }
      }
    }
  }
`;
