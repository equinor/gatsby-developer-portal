import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import Style from "../ui/style";
import { Actions } from "../reducers/SearchReducer";

const Wrapper = styled.section`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  margin: 0 15px 40px;
`;

const Title = styled.span`
  margin-top: 10px;
  display: inline-flex;
  font-size: ${Style.typography.base};
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

const ListItem = styled.li`
  background-color: ${props =>
    props.disabled ? Style.colors.lighterGray : Style.colors.lichenGreen};
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
    color: ${Style.colors.mossGreen};
    text-transform: uppercase;
  }
`;

const FilterListItem = styled(ListItem)`
  cursor: pointer;
`;

const TagWrapper = props => {
  return (
    <Wrapper>
      <List>
        <Title>Tags</Title>
        {props.children}
      </List>
    </Wrapper>
  );
};

/**
 * @param selectedTags InitialSelectedTags
 * @returns {function({node: *}): boolean}
 */
export function filterTags(selectedTags) {
  return ({ node }) => {
    const tags = node.frontmatter.tags.filter(tag => {
      const isDisabled = selectedTags[tag.toUpperCase()];
      return !isDisabled;
    });
    return tags.length > 0;
  };
}

export const TagFilter = ({ tags, selectedTags, dispatch }) => {
  const handleSelectedTags = value =>
    dispatch({ type: Actions.TOGGLE_SELECTED_TAG, value });
  const onSelectAll = () => dispatch({ type: Actions.SELECT_ALL_TAGS });

  const TagStatus = styled.span`
    font-size: 24px;
    padding-left: 10px;
    fontweight: 500;
  `;

  return (
    <TagWrapper>
      {tags.map(tag => {
        const handleClick = () => handleSelectedTags(tag.fieldValue);
        const disabled = selectedTags[tag.fieldValue.toUpperCase()];
        return (
          <FilterListItem
            disabled={disabled}
            key={tag.fieldValue}
            onClick={handleClick}
          >
            <span>
              {tag.fieldValue}
              <TagStatus>{disabled ? "+" : "x"}</TagStatus>
            </span>
          </FilterListItem>
        );
      })}
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={onSelectAll}
      >
        Select all
      </span>
    </TagWrapper>
  );
};

export default ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map(tag => (
        <ListItem key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue}
          </Link>
        </ListItem>
      ))}
    </TagWrapper>
  );
};
