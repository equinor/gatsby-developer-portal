import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Authors } from "../components/Bio";

const Container = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h3`
  margin-bottom: 0px;
`;

const NodeListing = ({ nodes }) =>
  nodes.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <Container key={node.fields.slug}>
        <Title>
          <Link to={`/${node.fields.collection}${node.fields.slug}`}>
            {title}
          </Link>
        </Title>
        <small>{node.frontmatter.date}</small>
        {node.fields.authors && <Authors authors={node.fields.authors} />}
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Container>
    );
  });

export default NodeListing;
