import {
  Actions,
  initializeState,
  tagFilterReducer,
} from "../TagFilterReducer";

describe("TagFilterReducer", () => {
  it("should have initial state", () => {
    const initialState = initializeState([{ fieldValue: "Api" }]);
    expect(initialState).toEqual({
      selectedTags: [
        {
          name: "Api",
          selected: false,
        },
      ],
      selectAll: true,
    });
  });

  it("should throw on unsupported action", () => {
    const dispatch = type => tagFilterReducer(initializeState([]), { type });
    expect(() => dispatch("not supported")).toThrow();
  });

  it("should handle empty tags", () => {
    const newState = tagFilterReducer(
      initializeState([]),
      Actions.toggleTag(0)
    );
    expect(newState.selectedTags).toHaveLength(0);
  });

  describe("Toggle Tags", () => {
    let firstState;
    beforeEach(() => {
      const initialState = initializeState([
        {
          fieldValue: "Api",
        },
        {
          fieldValue: "Tech",
        },
      ]);
      firstState = tagFilterReducer(initialState, Actions.toggleTag(0));
    });

    it("should toggle a selected tag", () => {
      expect(firstState.selectedTags[0].selected).toEqual(true);
      const newState = tagFilterReducer(firstState, Actions.toggleTag(0));
      expect(newState.selectedTags[0].selected).toEqual(false);
    });

    it("should toggle a unselected tag", () => {
      expect(firstState.selectedTags[1].selected).toEqual(false);
      const newState = tagFilterReducer(firstState, Actions.toggleTag(1));
      expect(newState.selectedTags[1].selected).toEqual(true);
    });

    it("should select all tags", () => {
      const newState = tagFilterReducer(firstState, Actions.toggleAll);
      expect(newState.selectedTags[0].selected).toEqual(true);
      expect(newState.selectedTags[1].selected).toEqual(true);
    });
  });
});
