import React from "react";
import { DocHeader } from "../DocHeader";
import renderer from "react-test-renderer";

describe("DocHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<DocHeader tags={["Api"]} title="Documents" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders aligned", () => {
    const tree = renderer
      .create(<DocHeader tags={["Api"]} title="Documents" alignCenter />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
