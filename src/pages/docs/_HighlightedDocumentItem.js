import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DocumentIcon from "../../assets/icons/Document.svg";

const HighlightedDocumentItem = props => {
  const { title, to } = props;

  const HighlightedDocumentStyle = styled.div`
    padding: 20px 0 15px;
    background-color: #ffffff;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1),
      0 20px 20px 0 rgba(0, 0, 0, 0.05);
  `;

  const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <HighlightedDocumentStyle>
      <Link to={to}>
        <ItemWrapper>
          <div>
            <DocumentIcon />
          </div>
        </ItemWrapper>

        <ItemWrapper>{title}</ItemWrapper>
      </Link>
    </HighlightedDocumentStyle>
  );
};

export { HighlightedDocumentItem };
