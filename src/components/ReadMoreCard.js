import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { getIcon } from "./IconUtil";

const ReadMoreCard = ({ node }) => {
  const {
    fields: { slug, collection },
    frontmatter: { title, tags },
  } = node;
  const Icon = getIcon(tags[0]);
  return (
    <div
      style={{
        display: "inline-flex",
        margin: 20,
        padding: 20,
        border: "1px solid",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "inline-flex", marginRight: 20 }}>
          <Icon />
        </div>
        <div style={{ display: "inline-flex" }}>
          <div>
            <div>{title}</div>
            <Link to={`/${collection}${slug}`}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default props => {
  const { tags } = props;
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
      {subPages
        .filter(({ node }) => {
          //filter only docs with at least one tag from doc-theme.
          return tags.filter(tag => {
            return node.frontmatter.tags.includes(tag);
          }).length;
        })
        .map((data, index) => {
          return <ReadMoreCard key={"readmore" + index} node={data.node} />;
        })}
    </div>
  );
};
