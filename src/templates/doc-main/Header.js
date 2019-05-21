import React from "react";
import styled from "styled-components";
import { FullWidth, Tag } from "../../components";
import { Title } from "./Title";
import { getCircleIcon } from "../../util/iconUtil";
import { style } from "../../ui";

export const Separator = styled.div`
  height: 4px;
  width: 187px;
  margin: 25px auto 20px;
  background-color: ${style.colors.mossGreen};
`;

export const Header = ({ title, tags }) => {
  const HeaderWrapper = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    margin-bottom: 30px;
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
        <Title>{title}</Title>
        <Separator />

        <div style={{ margin: "10px 0 20px", textAlign: "center" }}>
          <Tag tag={tags[0]} />
        </div>
      </HeaderWrapper>
    </FullWidth>
  );
};
