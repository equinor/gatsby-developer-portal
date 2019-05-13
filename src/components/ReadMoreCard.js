import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { getIcon } from "../ui/components/Categories";

const ReadMoreCard = props => {
  const { baseSlug } = props;
  const {
    fields: { slug },
    frontmatter: { title },
  } = props.data.node;
  const Icon = getIcon(baseSlug);
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
            <Link to={`/docs/${slug}`}>Read more</Link>
          </div>
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
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const subPages = data.allMarkdownRemark.edges.filter(edge => {
    const slug = edge.node.fields.slug;
    const isSubPath =
      slug.length > props.slug.length && slug.startsWith(props.slug);
    return isSubPath;
  });

  return (
    <div style={{ display: "flex" }}>
      {subPages.map((data, index) => {
        return (
          <ReadMoreCard
            key={"readmore" + index}
            baseSlug={props.slug}
            data={data}
          />
        );
      })}
    </div>
  );
};
