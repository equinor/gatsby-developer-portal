import styled from "styled-components";
import { style } from "../ui";
import { Link } from "gatsby";
import React from "react";

export const PageLink = props => {
  //setting defaults.
  const params = Object.assign(
    {
      color: style.colors.mossGreen,
    },
    props
  );
  const { color, title, to } = params;
  const StyledLink = styled.span`
    border: 1px solid ${color};
    border-radius: 3px;
    background-color: #ffffff;
    padding: 10px;
  `;
  return (
    <StyledLink>
      <Link to={to}>{title}</Link>
    </StyledLink>
  );
};
