import React from "react";
import { storiesOf } from "@storybook/react";
import Separator from "../src/components/Separator";
import { HeaderTitle } from "../src/components/Titles";
import { FullWidthDecorator, LayoutDecorator } from "./index.stories";

storiesOf("Titles", module)
  .addDecorator(LayoutDecorator)
  .addDecorator(FullWidthDecorator)
  .add("Separator", () => <Separator />)
  .add("HeaderTitle", () => <HeaderTitle title="Toolbox" />)
  .add("HeaderTitle with custom color", () => (
    <HeaderTitle color="blue" title="Toolbox" />
  ));
