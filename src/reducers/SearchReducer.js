/**
 * Key: tag name identifier (fieldValue)
 * Value: boolean disabled.
 *
 * Using disabled to simplify logic of uninitialized values.
 * Falsy values are "enabled" and truthy values are "disabled".
 *
 * @type {Object.<string>,<boolean>}
 */
export const INITIAL_SELECTED_TAGS = {};

export const Actions = {
  QUERY: "QUERY",
  TOGGLE_SELECTED_TAG: "TOGGLE_SELECTED_TAGS",
  INIT_SELECTED_TAGS: "INIT_SELECTED_TAGS",
  SELECT_ALL_TAGS: "SELECT_ALL_TAGS",
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case Actions.QUERY:
      return { ...state, query: action.value };

    case Actions.INIT_SELECTED_TAGS:
      return { ...state, selectedTags: action.selectedTags };

    case Actions.TOGGLE_SELECTED_TAG:
      const key = action.value.toUpperCase();
      const newState = { ...state };
      const currentValue = state.selectedTags[key];
      //assume default is false, then switch or toggle initial value.
      newState.selectedTags[key] =
        currentValue === undefined ? true : !currentValue;
      return newState;

    case Actions.SELECT_ALL_TAGS:
      return { ...state, selectedTags: {} };

    default:
      throw Error();
  }
};
