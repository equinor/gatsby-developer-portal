import { TagFilter } from "../src/components/TagFilter";
import React, { useReducer } from "react";
import {
  initializeState,
  tagFilterReducer,
} from "../src/components/TagFilterReducer";
import { storiesOf } from "@storybook/react";
import { LayoutDecorator } from "./index.stories";

const TagFilterWrapper = ({ tags }) => {
  const [filterState, dispatchFilterAction] = useReducer(
    tagFilterReducer,
    initializeState(tags)
  );
  return (
    <TagFilter
      tags={tags}
      dispatch={dispatchFilterAction}
      state={filterState}
    />
  );
};

const tags = [
  { fieldValue: "Api" },
  { fieldValue: "Tech" },
  { fieldValue: "Security" },
];

storiesOf("TagFilter", module)
  .addDecorator(LayoutDecorator)
  .add("with multiple tags", () => <TagFilterWrapper tags={tags} />);
