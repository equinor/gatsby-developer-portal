import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";
import SearchEngineOptimization from "../SearchEngineOptimization";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  );
});

describe("SearchEngineOptimization", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchEngineOptimization title="All blogs" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with keywords", () => {
    const tree = renderer
      .create(
        <SearchEngineOptimization title="All blogs" keywords={["blog"]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
