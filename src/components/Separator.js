import React from "react";
import styled from "styled-components";
import { style } from "../ui";

const Separator = styled.div`
  height: 4px;
  width: 20%;
  margin: ${props => props.margin};
  background-color: ${props => props.color || style.colors.mossGreen};
`;

export default Separator;
