import React from "react";
import { Link } from "gatsby";
import { Tag } from "./Tags";
import { Divider } from "./BlogListing";
import { Col } from "react-styled-flexboxgrid";
import { Icon } from "./Icons";

export default ({ node }) => {
  const {
    frontmatter: { title, tags },
    fields: { slug, collection },
  } = node;
  const iconTag = tags && tags.length > 0 ? tags[0] : "";
  return (
    <Col xs={12} md={10} mdOffset={1}>
      <div style={{ paddingTop: 30 }}>
        <Icon tag={iconTag} size={30} />
        {iconTag && <Tag tag={iconTag} />}
      </div>
      <Link to={`/${collection}${slug}`} style={{ padding: "10px 0 20px" }}>
        {title}
      </Link>
      <Divider />
    </Col>
  );
};
