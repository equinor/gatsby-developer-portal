import React from "react";
import { Link } from "gatsby";
import { getIcon } from "./Categories";
import { Tag } from "./Tags";
import { Divider } from "../../components/BlogListing";

export default ({ node }) => {
  const {
    frontmatter: { title },
    fields: { slug, collection },
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
      <Link to={`/${collection}${slug}`} style={{ padding: "10px 0 20px" }}>
        {title}
      </Link>
      <Divider />
    </React.Fragment>
  );
};
