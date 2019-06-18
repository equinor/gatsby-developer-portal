import React from "react";
import styled from "styled-components";

export const FullWidth = styled.div`
  left: calc((100% - 100vw) / 2);
  position: relative;
  width: 100vw;
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
  background-color: ${props => props.backgroundColor};
`;
