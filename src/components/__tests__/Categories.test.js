import React from "react";
import renderer from "react-test-renderer";
import { Categories } from "../Categories";
import { mockAuthors } from "./Bio.test";

describe("Categories", () => {
  const node = {
    frontmatter: { title: "Api", tags: ["Api"] },
    fields: { authors: mockAuthors },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Categories nodes={[{ node }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
