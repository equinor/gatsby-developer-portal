import React from "react";
import styled from "styled-components";
import { style } from "../../ui";
import { BlogTag, Authors, HeaderTitle } from "../../components";

export const BlogPostHeader = props => {
  const { title, date, tags, authors } = props;

  const Wrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
  `;

  return (
    <Wrapper>
      <BlogTag tags={tags} date={date} to="/blog" />
      <div style={{ margin: "20px 0 40px" }}>
        <HeaderTitle title={title} color={style.colors.energyRed} />
      </div>
      {authors && <Authors authors={authors} />}
    </Wrapper>
  );
};
