import React from "react";
import styled from "styled-components";
import Style from "../style";

const Tags = styled.div``;

const Tag = styled.span`
  font-size: ${Style.typography.xs};
  font-weight: 500;
  line-height: 14px;
  color: ${Style.colors.mossGreen};
  text-transform: uppercase;

  span {
    font-size: 25px;
    color: black;
    font-weight: 200;
    padding: 0 2px 0 10px;
  }
`;

const TimeDate = styled.div`
  font-size: ${Style.typography.sm};
  color: ${Style.colors.lightGray};
`;

export const TagsHeader = ({ date, tags }) => {
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
            <Tag key={`${tag}-${index}`}>
              {" "}
              <span>/</span> {tag}{" "}
            </Tag>
          );
        })}
      </Tags>
    </div>
  );
};
