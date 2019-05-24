import React from "react";
import { render } from "react-testing-library";
import Card from "../Card";

describe("Card", () => {
  it("renders correctly", () => {
    const { container } = render(<Card xl />);
    // const value = wrapper.find("div");
    expect(container.querySelector("div")).toHaveStyleRule(
      "flex-direction",
      "column"
    );
  });
});
