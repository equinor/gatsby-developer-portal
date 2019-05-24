import React from "react";
import BlogListing from "../BlogListing";
import { mockAuthors } from "./Bio.test";
import renderer from "react-test-renderer";

describe("BlogListing", () => {
  it("renders correctly", () => {
    const node = {
      frontmatter: { title: "Api", tags: ["Api"] },
      fields: { authors: mockAuthors },
    };
    const tree = renderer
      .create(<BlogListing node={node} onTagClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
