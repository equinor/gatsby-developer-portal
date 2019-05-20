import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { style } from "../ui";

const Tags = styled.div``;

const TagStyle = styled.span`
  font-size: ${style.typography.xs};
  font-weight: 500;
  line-height: 14px;
  cursor: ${({ cursor }) => cursor || "inherit"};
  color: ${style.colors.mossGreen};
  text-transform: uppercase;
`;

const TagSeparator = () => {
  const Separator = styled.span`
    font-size: 25px;
    color: black;
    font-weight: 200;
    padding: 0 2px 0 10px;
  `;
  return <Separator>/</Separator>;
};

const TimeDate = styled.div`
  margin-right: 10px;
  font-size: ${style.typography.sm};
  color: ${style.colors.lightGray};
`;

export const Tag = ({ to, tag, onTagClick }) => {
  const TagElem = () => {
    if (to) {
      return (
        <Link to={to} state={{ tag }}>
          <TagStyle cursor="pointer">{tag}</TagStyle>
        </Link>
      );
    } else if (onTagClick) {
      return (
        <TagStyle cursor="pointer" onClick={() => onTagClick(tag)}>
          {tag}
        </TagStyle>
      );
    } else {
      return <TagStyle>{tag}</TagStyle>;
    }
  };
  return (
    <React.Fragment>
      <TagSeparator />
      <TagElem to={to} onTagClick={onTagClick} />
    </React.Fragment>
  );
};

export const BlogTag = ({ date, tags, onTagClick, to = "" }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <TimeDate>{date}</TimeDate>

      <Tags>
        {tags.map((tag, index) => {
          return (
            <Tag
              key={`${tag}-${index}`}
              tag={tag}
              to={to}
              onTagClick={onTagClick}
            />
          );
        })}
      </Tags>
    </div>
  );
};
