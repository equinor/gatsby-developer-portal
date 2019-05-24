import React from "react";
import { mockAuthors } from "./Bio.test";
import renderer from "react-test-renderer";
import DocListing from "../DocListing";

describe("BlogListing", () => {
  const node = {
    frontmatter: { title: "Api", tags: ["Api"] },
    fields: { authors: mockAuthors },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<DocListing node={node} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
