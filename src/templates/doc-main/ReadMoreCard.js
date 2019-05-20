import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { getCircleIcon } from "../../util/iconUtil";
import { Tag } from "../../ui/components";
import { style } from "../../ui";

const ReadMoreLink = ({ to }) => {
  const StyledLink = styled.span`
    border: 1px solid ${style.colors.mossGreen};
    border-radius: 3px;
    background-color: #ffffff;
    padding: 10px;
  `;
  return (
    <StyledLink>
      <Link to={to}>Read more</Link>
    </StyledLink>
  );
};

const ReadMoreCard = props => {
  const {
    fields: { slug, collection },
    frontmatter: { title, tags },
  } = props.node;
  const Icon = getCircleIcon(tags[0]);
  return (
    <div
      style={{
        display: "inline-flex",
        backgroundColor: "#fff",
        margin: 20,
        width: "100%",
        padding: "5px 20px",
      }}
    >
      <div>
        <div style={{ display: "block", margin: "10px 0 20px" }}>
          <Tag tag={tags[0]} to={`/docs-theme/${tags[0].toLowerCase()}/`} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex" }}>
            <Icon />
          </div>

          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <div style={{ marginLeft: 20 }}>{title}</div>
          </div>
        </div>
        <div style={{ margin: "30px 0 15px" }}>
          <ReadMoreLink to={`/${collection}${slug}`} />
        </div>
      </div>
    </div>
  );
};

export default props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { collection: { eq: "docs" } } }) {
        edges {
          node {
            fields {
              slug
              collection
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);
  const subPages = data.allMarkdownRemark.edges;

  return (
    <div style={{ display: "flex" }}>
      {subPages.map((data, index) => {
        return <ReadMoreCard key={"readmore" + index} node={data.node} />;
      })}
    </div>
  );
};
