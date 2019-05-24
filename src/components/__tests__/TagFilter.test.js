import renderer from "react-test-renderer";
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
  it("renders correctly", () => {
    const tree = renderer
      .create(<TagFilter tags={tags} selectedTags={selectedTags} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
      getByText("Deselect all"),
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
