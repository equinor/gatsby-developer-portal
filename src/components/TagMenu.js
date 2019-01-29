import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import kebabCase from "lodash/kebabCase";

const TagMenu = styled.ul`
  padding: 0;
  list-style: none;
  list-style-image: none;  
  padding-bottom: 14px;
`;

const Tag = styled.li`
  border: none;
  color: rgba(0,0,0,.68);
  display: inline-block;
  font-size: 15px;
  letter-spacing: 0;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
  padding: 0px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const TagLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export default ({tags}) => {
    const tagList = tags.map(tag => {
        return (
            <Tag key={tag}>
                <TagLink to={`/tags/${kebabCase(tag)}/`}>
                    {tag}
                </TagLink>
            </Tag>
        )
    });

    return (
        <TagMenu>
            {tagList}
        </TagMenu>
    )
}
