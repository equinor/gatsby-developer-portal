import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FullWidth, Tag } from "../../components";
import { PageLink } from "../../components/PageLink";
import { CircleIcon } from "../../components/Icons";

const ReadMoreCard = props => {
  const {
    fields: { slug, collection },
    frontmatter: { title, tags },
  } = props.node;
  const iconTag = tags && tags.length > 0 ? tags[0] : "";
  return (
    <div
      style={{
        display: "inline-flex",
        backgroundColor: "#fff",
        margin: 20,
        maxWidth: "33%",
        padding: "5px 20px",
      }}
    >
      <div>
        <div style={{ display: "block", margin: "10px 0 20px" }}>
          <Tag tag={iconTag} to={`/docs-theme/${iconTag.toLowerCase()}/`} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex" }}>
            <CircleIcon tag={iconTag} size={56} />
          </div>

          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <div style={{ marginLeft: 20 }}>{title}</div>
          </div>
        </div>
        <div style={{ margin: "30px 0 15px" }}>
          <PageLink to={`/${collection}${slug}`} title="Read More" />
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
  // remove forward slash from slug.
  const tag = props.slug.replace(/\//g, "");
  return (
    <FullWidth>
      <div style={{ display: "flex" }}>
        {subPages
          .filter(
            ({ node }) =>
              node.frontmatter.tags &&
              node.frontmatter.tags.includes(tag.toUpperCase())
          )
          .map((data, index) => {
            return <ReadMoreCard key={"readmore" + index} node={data.node} />;
          })}
      </div>
    </FullWidth>
  );
};
