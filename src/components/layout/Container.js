import React from "react";
import styled from "styled-components";
import media from "../../ui/media-query";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px 50px;
  width: 100%;

  ${media.lg`
    max-width: 960px;
  `};

  ${media.xl`
    max-width: 1140px;
  `};
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
