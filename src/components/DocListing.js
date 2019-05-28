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
  const iconTag = tags && tags.length > 0 ? tags[0] : "";
  const Icon = getIcon(iconTag);
  return (
    <Col xs={12} md={10} mdOffset={1}>
      <div style={{ paddingTop: 30 }}>
        <Icon style={{ width: 30, height: 30 }} />
        {iconTag && <Tag tag={iconTag} />}
      </div>
      <Link to={`/${collection}${slug}`} style={{ padding: "10px 0 20px" }}>
        {title}
      </Link>
      <Divider />
    </Col>
  );
};
