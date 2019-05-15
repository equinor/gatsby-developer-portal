import React from "react";
import { getIcon } from "./Categories";
import { Tag } from "./Tags";
import { Divider } from "../../components/BlogListing";

export default ({ node }) => {
  const {
    frontmatter: { title },
    fields: { slug },
  } = node;
  //find base slug.
  const baseSlug = slug.substring(0, slug.substr(1).indexOf("/") + 2);
  const Icon = getIcon(baseSlug);
  return (
    <React.Fragment>
      <div style={{}}>
        <Icon style={{ height: 30, width: 30 }} />
        <Tag tag={baseSlug.replace(/\//g, "")} />
      </div>
      <div style={{ padding: "10px 0 20px" }}>{title}</div>
      <Divider />
    </React.Fragment>
  );
};
