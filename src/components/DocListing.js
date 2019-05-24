import React from "react";
import { Link } from "gatsby";
import { Tag } from "./Tags";
import { Divider } from "./BlogListing";
import { getIcon } from "../util/iconUtil";
import { Col } from "react-styled-flexboxgrid";

export default ({ node }) => {
  const {
    frontmatter: { title, tags },
    fields: { slug, collection },
  } = node;
  //find base slug.
  const Icon = getIcon(tags[0]);
  return (
    <Col xs={12} md={10} mdOffset={1}>
      <div style={{}}>
        <Icon style={{ height: 30, width: 30 }} />
        <Tag tag={tags[0]} />
      </div>
      <Link to={`/${collection}${slug}`} style={{ padding: "10px 0 20px" }}>
        {title}
      </Link>
      <Divider />
    </Col>
  );
};
