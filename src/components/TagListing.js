import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import Style from "../ui/style";

const Wrapper = styled.section`
  margin-left: 15px;
  margin-right: 15px;
  margin: 0 15px 40px;
`;

const Title = styled.span`
  font-size: ${Style.typography.base};
  font-weight: bold;
  line-height: 21px;
`;

const List = styled.ul`
  list-style: none;
  display: inline-flex;
  padding-left: 20px;
`;

const ListItem = styled.li`
  background-color: ${Style.colors.lichenGreen};
  padding: 0 20px;
  text-align: center;
  border-radius: 20.5px;
  margin-right: 20px;

  a {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: ${Style.colors.mossGreen};
    text-transform: uppercase;
  }
`;

export default ({ tags }) => {
  return (
    <Wrapper>
      <Title>Tags</Title>
      <List>
        {tags.map(tag => (
          <ListItem key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
