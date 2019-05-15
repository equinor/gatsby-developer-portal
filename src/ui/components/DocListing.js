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
  const category = slug.substr(1, slug.substr(1).indexOf("/"));
  const Icon = getIcon(node.fields);
  return (
    <React.Fragment>
      <div style={{}}>
        <Icon style={{ height: 30, width: 30 }} />
        <Tag tag={category} />
      </div>
      <div style={{ padding: "10px 0 20px" }}>{title}</div>
      <Divider />
    </React.Fragment>
  );
};
