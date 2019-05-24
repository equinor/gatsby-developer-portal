import React from "react";
import renderer from "react-test-renderer";
import TagListing from "../TagListing";

describe("BlogListing", () => {
  it("renders correctly", () => {
    const tags = [{ fieldValue: "Api" }, { fieldValue: "Tech", enabled: true }];
    const tree = renderer.create(<TagListing tags={tags} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
