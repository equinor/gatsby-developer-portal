import React from "react";
import styled from "styled-components";

import { FullWidth, HeaderTitle } from "../../components";
import ReadMoreCard from "./ReadMoreCard";
import { style } from "../../ui";

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
        <HeaderTitle
          title="Further Reading"
          fontSize={48}
          alignCenter
          color={style.colors.mossGreen}
        />
        <div style={{ marginTop: 50 }}>
          <ReadMoreCard slug={props.slug} />
        </div>
      </FooterWrapper>
    </FullWidth>
  );
};
