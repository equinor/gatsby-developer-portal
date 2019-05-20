import React from "react";
import styled from "styled-components";

import { FullWidth } from "../../components";
import { Title } from "./Title";
import ReadMoreCard from "./ReadMoreCard";
import { Separator } from "./Header";

export default props => {
  const FooterWrapper = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    padding-top: 30px;
    margin: 30px 0;
    padding: 50px 0;
  `;
  return (
    <FullWidth backgroundColor="#f2f2f2">
      <FooterWrapper>
        <Title fontSize={52}>Further reading</Title>
        <Separator />
        <ReadMoreCard slug={props.slug} />
      </FooterWrapper>
    </FullWidth>
  );
};
