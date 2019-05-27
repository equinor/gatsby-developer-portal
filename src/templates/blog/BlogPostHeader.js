import React from "react";
import styled from "styled-components";
import { style } from "../../ui";
import { HeaderTitle } from "../../components/Titles";
import { BlogTag } from "../../components/Tags";
import { Authors } from "../../components/Bio";
import { FullWidth } from "../../components/FullWidth";

export const BlogPostHeader = props => {
  const { title, date, tags, authors } = props;

  const Wrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
  `;

  return (
    <FullWidth backgroundColor="#f2f2f2">
      <Wrapper>
        <BlogTag tags={tags} date={date} to="/blog" />
        <div style={{ margin: "20px 0 40px" }}>
          <HeaderTitle title={title} color={style.colors.energyRed} />
        </div>
        {authors && <Authors authors={authors} />}
      </Wrapper>
    </FullWidth>
  );
};
