import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Tag } from "../Tags";

describe("Tag", () => {
  it("should click on tag", () => {
    const mockClick = jest.fn();
    const { getByText } = render(<Tag onTagClick={mockClick} tag="Api" />);
    // <button>Submit</button>
    fireEvent(
      getByText("Api"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(mockClick).toHaveBeenCalled();
  });

  it("should have text", () => {
    const { getByText } = render(<Tag tag="Api" />);
    expect(getByText("Api")).toHaveTextContent("Api");
  });

  it("should have link", () => {
    render(<Tag to="/test" tag="Api" />);
    expect(document.querySelector("a")).toContainHTML('href="/test"');
  });
});
