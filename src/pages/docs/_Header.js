import React from "react";
import styled from "styled-components";
import { style } from "../../ui";

export const Header = props => {
  const HeaderTitle = styled.span`
    padding-bottom: 30px;
    border-bottom: 4px solid ${style.colors.energyRed};
  `;

  const HeaderWrapper = styled.div`
    font-family: Equinor;
    font-size: 48px;
    letter-spacing: -0.1px;
    line-height: 52px;
    text-align: center;
    padding-bottom: 40px; /* match title border distance */
  `;

  const HeaderBox = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 150px;
  `;
  return (
    <HeaderBox>
      <HeaderWrapper>
        <HeaderTitle>{props.title}</HeaderTitle>
      </HeaderWrapper>
    </HeaderBox>
  );
};
