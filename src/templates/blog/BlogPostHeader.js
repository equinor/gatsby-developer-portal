import React from "react";
import styled from "styled-components";
import { style } from "../../ui";
import { BlogTag, Authors } from "../../components";

export const BlogPostHeader = props => {
  const { title, date, tags, authors } = props;

  const Wrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
  `;

  const Title = styled.div`
    color: #333333;
    font-family: Equinor;
    font-size: 48px;
    letter-spacing: -0.1px;
    line-height: 52px;
    margin-top: 20px;
  `;

  const Delimiter = styled.div`
    border-bottom: 3px solid red;
    margin: 20px 0 30px;
    width: 20%;
    color: ${style.colors.energyRed}
    max-width: 250px;
  `;

  return (
    <Wrapper>
      <BlogTag tags={tags} date={date} to="/blog" />
      <Title>{title}</Title>
      <Delimiter />
      <div>{authors && <Authors authors={authors} />}</div>
    </Wrapper>
  );
};
