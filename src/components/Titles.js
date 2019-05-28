import React from "react";
import styled from "styled-components";
import Separator from "./Separator";
import { style } from "../ui";

const Title = styled.div`
  color: #333333;
  font-size: ${props => props.fontSize || 52}px;
  letter-spacing: -0.1px;
  line-height: 52px;
  text-align: ${props => (props.alignCenter ? "center" : "initial")};
`;

export const HeaderTitle = props => {
  const margin = props.alignCenter ? "20px auto 0" : "20px 0 0";
  return (
    <React.Fragment>
      <Title {...props}>{props.title}</Title>
      <Separator
        margin={margin}
        color={props.color || style.colors.energyRed}
      />
    </React.Fragment>
  );
};
