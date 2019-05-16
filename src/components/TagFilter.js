import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { ListItem, TagWrapper } from "./TagListing";

/**
 * @param selectedTags InitialSelectedTags
 * @returns {function({node: *}): boolean}
 */
export function filterTags(selectedTags) {
  const hasSelections = selectedTags.filter(tag => tag.selected).length;
  return ({ node }) => {
    if (!hasSelections || !node.frontmatter.tags) {
      return true;
    }

    //returns true if one of post tag's is selected.
    const tags = node.frontmatter.tags.filter(tagName => {
      return selectedTags.filter(selectedTag => {
        return selectedTag.selected && selectedTag.name === tagName;
      }).length;
    });
    return tags.length;
  };
}

export function initializeSelectedTags(tags, paramTag) {
  return tags.map(tag => {
    const selected = paramTag ? paramTag === tag.fieldValue : true;
    return { name: tag.fieldValue, selected };
  });
}

const FilterListItem = styled(ListItem)`
  cursor: pointer;
`;

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
export const TagFilter = ({ tags, selectedTags, setSelectedTags }) => {
  const [selectAll, setSelectAll] = useState(false);

  const TagStatus = styled.span`
    font-size: 24px;
    padding-left: 10px;
    fontweight: 500;
  `;

  const toggleTags = () => {
    setSelectAll(!selectAll);
    setSelectedTags(
      selectedTags.map(tag => {
        tag.selected = selectAll;
        return tag;
      })
    );
  };

  const toggleTag = (tags, name) => {
    setSelectedTags(
      tags.map(tag => {
        //toggle single tag if name is provided.
        if (tag.name === name) {
          tag.selected = !tag.selected;
        }
        return tag;
      })
    );
  };

  const SelectAll = ({ selectAll, onClick }) => (
    <span
      style={{ textDecoration: "underline", cursor: "pointer" }}
      onClick={onClick}
    >
      {selectAll ? "Select all" : "Deselect all"}
    </span>
  );
  return (
    <TagWrapper>
      {tags.map((tag, index) => {
        const enabled = selectedTags[index].selected;
        return (
          <FilterListItem
            enabled={selectedTags[index].selected}
            key={tag.fieldValue}
            onClick={() => toggleTag(selectedTags, tag.fieldValue)}
          >
            <span>
              {tag.fieldValue}
              <TagStatus>{enabled ? "X" : "+"}</TagStatus>
            </span>
          </FilterListItem>
        );
      })}
      <SelectAll onClick={toggleTags} selectAll={selectAll} />
    </TagWrapper>
  );
};
