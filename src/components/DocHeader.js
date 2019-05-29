import React from "react";
import styled from "styled-components";
import { FullWidth } from "./FullWidth";
import { Tag } from "./Tags";
import { getCircleIcon } from "../util/iconUtil";
import { HeaderTitle } from "./Titles";
import { colors } from "../ui";

export const DocHeader = ({ title, tags }) => {
  const HeaderWrapper = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    text-align: center;
  `;

  const IconWrapper = styled.div`
    height: 72px;
    transform: translate(0, -50%);
  `;
  const Icon = getCircleIcon(tags[0]);
  return (
    <FullWidth backgroundColor="#f2f2f2">
      <HeaderWrapper>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <HeaderTitle
          title={title}
          color={colors.mossGreen}
          alignCenter={true}
        />
        <div style={{ padding: "15px 0 20px", textAlign: "center" }}>
          <Tag tag={tags[0]} />
        </div>
      </HeaderWrapper>
    </FullWidth>
  );
};
