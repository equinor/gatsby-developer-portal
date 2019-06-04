import styled from "styled-components";
import React from "react";
import { ListItem, TagWrapper } from "./TagListing";
import { Actions } from "./TagFilterReducer";

/**
 * SelectedTags should be available outside this component.
 * Passing selectedTags to children will make TagFilter less usable.
 *
 * @param tags array {fieldValue}
 * @param selectedTags array {name: string, selected: boolean}
 * @param setSelectedTags setState(selectedState)
 * @returns {*} component
 * @constructor
 */
export const TagFilter = ({ tags, state, dispatch }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  const TagStatus = styled.span`
    font-size: 24px;
    padding-left: 10px;
    font-weight: 500;
  `;

  const toggleTags = () => dispatch(Actions.toggleAll);

  const FilterListItem = styled(ListItem)`
    cursor: pointer;
  `;
  const toggleTag = index => dispatch(Actions.toggleTag(index));

  const SelectAll = ({ onClick }) => (
    <span
      style={{ textDecoration: "underline", cursor: "pointer" }}
      onClick={onClick}
    >
      {state.selectAll ? "Select all" : "Deselect all"}
    </span>
  );
  return (
    <TagWrapper>
      {tags.map((tag, index) => {
        const isEnabled = state.selectedTags[index].selected;
        return (
          <FilterListItem
            enabled={isEnabled}
            key={tag.fieldValue}
            onClick={() => toggleTag(index)}
          >
            <span>
              {tag.fieldValue}
              <TagStatus>{isEnabled ? "X" : "+"}</TagStatus>
            </span>
          </FilterListItem>
        );
      })}
      <SelectAll onClick={toggleTags} />
    </TagWrapper>
  );
};
