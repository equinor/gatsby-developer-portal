import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { style } from "../ui";

const Wrapper = styled.section`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  margin: 0 15px 40px;
`;

const Title = styled.span`
  margin-top: 10px;
  display: inline-flex;
  font-size: ${style.typography.base};
  font-weight: bold;
  line-height: 21px;
  flex-wrap: wrap;
  margin-right: 15px;
`;

const List = styled.ul`
  margin-top: 40px;
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  background-color: ${props =>
    props.enabled ? style.colors.lichenGreen : style.colors.lighterGray};
  padding: 0 20px;
  text-align: center;
  border-radius: 20.5px;
  margin-right: 20px;
  margin-bottom: 10px;

  a,
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: ${style.colors.mossGreen};
    text-transform: uppercase;
  }
`;

export const TagWrapper = props => {
  return (
    <Wrapper>
      <List>
        <Title>Tags</Title>
        {props.children}
      </List>
    </Wrapper>
  );
};

export default ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map(tag => (
        <ListItem key={tag.fieldValue} enabled={tag.enabled}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue}
          </Link>
        </ListItem>
      ))}
    </TagWrapper>
  );
};
