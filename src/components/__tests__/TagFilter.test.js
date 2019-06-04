import React from "react";
import { render, fireEvent } from "react-testing-library";
import { TagFilter } from "../TagFilter";

const tags = [{ fieldValue: "Api" }, { fieldValue: "Tech", selected: true }];

//generate test data
const selectedTags = tags.map(tag => ({
  name: tag.fieldValue,
  selected: tag.selected,
}));

describe("TagFilter", () => {
  it("should deselect all tags", () => {
    const mockClick = jest.fn();
    const { getByText } = render(
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={mockClick}
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
        selectedTags={selectedTags}
        setSelectedTags={mockClick}
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
