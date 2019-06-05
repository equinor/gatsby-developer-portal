import React from "react";
import styled from "styled-components";
import { FullWidth } from "./FullWidth";
import { Tag } from "./Tags";
import { HeaderTitle } from "./Titles";
import { colors } from "../ui";
import { CircleIcon } from "./Icons";

export const DocHeader = ({ title, tags }) => {
  const HeaderWrapper = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    text-align: center;
  `;

  const IconWrapper = styled.div`
    transform: translate(0, -50%);
  `;
  const iconTag = tags && tags.length > 0 ? tags[0] : "";
  return (
    <FullWidth backgroundColor="#f2f2f2">
      <HeaderWrapper>
        <IconWrapper>
          <CircleIcon tag={iconTag} />
        </IconWrapper>
        <HeaderTitle
          title={title}
          color={colors.mossGreen}
          alignCenter={true}
        />
        <div style={{ padding: "15px 0 20px", textAlign: "center" }}>
          <Tag tag={iconTag} />
        </div>
      </HeaderWrapper>
    </FullWidth>
  );
};
