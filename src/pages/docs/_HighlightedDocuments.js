import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { HighlightedDocumentItem } from "./_HighlightedDocumentItem";

export const HighlightedDocuments = props => {
  const { items } = props;
  return (
    <Grid style={{ width: "100%" }}>
      <Row style={{ transform: `translate(0, -50%)` }}>
        {items.slice(0, 4).map(item => {
          const {
            frontmatter: { title },
            fields: { slug, collection },
          } = item.node;
          const to = `/${collection}${slug}`;
          return (
            <Col key={`highlighted-${title}`} md={3} xs={6}>
              <HighlightedDocumentItem key={title} title={title} to={to} />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};
