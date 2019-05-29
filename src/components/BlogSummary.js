import React from "react";
import styled from "styled-components";
import BlogListing from "./BlogListing";
import { HeaderTitle } from "./Titles";
import { colors } from "../ui";
import { Col } from "react-styled-flexboxgrid";
import { FullWidth } from "./FullWidth";
import { PageLink } from "./PageLink";

const PageLinkWrapper = styled.div`
  transform: translate(0, 50%);
`;

export const BlogSummary = props => {
  const { nodes } = props;
  const Wrapper = styled.div`
    background-color: white;
    margin: 50px 0;
    padding: 10px 0;
  `;
  return (
    <FullWidth backgroundColor="#f2f2f2">
      <div style={{ padding: "50px 0 30px" }}>
        <HeaderTitle
          title="Latest developer insight"
          color={colors.mossGreen}
          alignCenter
        />
        <Col xs={12} md={8} mdOffset={2}>
          {nodes.map(({ node }, index) => {
            return (
              <Wrapper key={`node-${index}`}>
                <BlogListing node={node} />
              </Wrapper>
            );
          })}
        </Col>
      </div>
      <div style={{ textAlign: "center" }}>
        <PageLinkWrapper>
          <PageLink
            to="/blog"
            title="See all blogpost"
            color={colors.energyRed}
          />
        </PageLinkWrapper>
      </div>
    </FullWidth>
  );
};
