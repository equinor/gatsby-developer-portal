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
