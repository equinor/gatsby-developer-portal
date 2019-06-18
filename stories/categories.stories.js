import React from "react";
import { storiesOf } from "@storybook/react";
import { Categories } from "../src/components/Categories";
import { nodes } from "./mock/mockCategories";
import { FullWidthDecorator, LayoutDecorator } from "./index.stories";

storiesOf("Categories", module)
  .addDecorator(LayoutDecorator)
  .addDecorator(FullWidthDecorator)
  .add("default", () => (
    <div style={{ margin: 10, width: 1140, border: "1px solid" }}>
      <Categories nodes={nodes} />
    </div>
  ));
