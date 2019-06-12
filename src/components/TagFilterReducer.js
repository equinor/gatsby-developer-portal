export const initializeState = tags => ({
  selectedTags: tags.map(tag => ({ name: tag.fieldValue, selected: false })),
  selectAll: true,
});

const TOGGLE_ALL = "TOGGLE_ALL";
const TOGGLE_TAG = "TOGGLE_TAG";

export const Actions = {
  toggleAll: {
    type: TOGGLE_ALL,
  },
  toggleTag: index => ({
    type: TOGGLE_TAG,
    index,
  }),
};

/*
 * Using a reducer to handle complexity.
 * Both actions needs to update selectedTags
 * In edgecases bot actions needs to update both selectedTags and selectAll.
 * When all items are selected/unselected except one, a toggleTag triggers flipping the selectAll flag.
 */
export function tagFilterReducer(state, action) {
  switch (action.type) {
    case TOGGLE_ALL:
      const selectedTagsAllClone = state.selectedTags.slice();
      return {
        ...state,
        selectedTags: selectedTagsAllClone.map(tag => {
          tag.selected = state.selectAll;
          return tag;
        }),
        selectAll: !state.selectAll,
      };
    case TOGGLE_TAG:
      const selectedTagsClone = state.selectedTags.slice();
      if (selectedTagsClone.length > 0) {
        selectedTagsClone[action.index].selected = !state.selectedTags[
          action.index
        ].selected;
      }
      return {
        ...state,
        selectedTags: selectedTagsClone,
        selectAll: getSelectAll(selectedTagsClone, state.selectAll),
      };
    default:
      throw new Error("not supported: " + action.type);
  }
}

function getSelectAll(selectedTags, selectAll) {
  const numberSelectedTags = selectedTags.filter(tag => tag.selected).length;
  if (numberSelectedTags === selectedTags.length) {
    return false; //deselect.
  } else {
    //select all unless all are selected.
    return true;
  }
}
