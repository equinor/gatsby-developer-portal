import React from "react";
import styled from "styled-components";
import Style from "../style";
import { Link } from "@reach/router";

const Tags = styled.div``;

const Tag = styled.span`
  font-size: ${Style.typography.xs};
  font-weight: 500;
  line-height: 14px;
  color: ${Style.colors.mossGreen};
  text-transform: uppercase;
`;

const Separator = styled.span`
  font-size: 25px;
  color: black;
  font-weight: 200;
  padding: 0 2px 0 10px;
`;

const TimeDate = styled.div`
  font-size: ${Style.typography.sm};
  color: ${Style.colors.lightGray};
`;

const TagElem = ({ to, tag }) => {
  return to ? (
    <Link to={to} state={{ selectedTag: tag }}>
      {tag}
    </Link>
  ) : (
    <span>{tag}</span>
  );
};

export const TagsHeader = ({ date, tags, onTagClick = () => {}, to = "" }) => {
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
            <Tag key={`${tag}-${index}`} onClick={() => onTagClick(tag)}>
              {" "}
              <Separator>/</Separator>
              <TagElem to={to} tag={tag} />{" "}
            </Tag>
          );
        })}
      </Tags>
    </div>
  );
};
