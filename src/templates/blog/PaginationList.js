import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export default props => {
  const { previous, next } = props.pageContext;
  return (
    <PaginationList>
      <li>
        {previous && (
          <Link
            to={`${previous.fields.collection}${previous.fields.slug}`}
            rel="prev"
          >
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <div>
        {next && (
          <Link to={`${next.fields.collection}${next.fields.slug}`} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </div>
    </PaginationList>
  );
};
