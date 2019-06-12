import React, { useReducer } from "react";
import { render, fireEvent } from "react-testing-library";
import { TagFilter } from "../TagFilter";
import { initializeState } from "../TagFilterReducer";

const tags = [{ fieldValue: "Api" }, { fieldValue: "Tech" }];

describe("TagFilter", () => {
  it("should deselect all tags", () => {
    const mockClick = jest.fn();
    const { getByText } = render(
      <TagFilter
        tags={tags}
        dispatch={mockClick}
        state={initializeState(tags)}
      />
    );
    fireEvent(
      getByText("Select all"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(mockClick).toHaveBeenCalled();
  });

  it("should toggle tag", () => {
    const mockClick = jest.fn();
    const { getByText } = render(
      <TagFilter
        tags={tags}
        dispatch={mockClick}
        state={initializeState(tags)}
      />
    );
    fireEvent(
      getByText("Tech"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(mockClick).toHaveBeenCalled();
  });
});
