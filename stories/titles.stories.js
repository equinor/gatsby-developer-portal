import React from "react";
import { storiesOf } from "@storybook/react";
import Separator from "../src/components/Separator";
import { HeaderTitle } from "../src/components/Titles";

storiesOf("Titles", module)
  .add("Separator", () => <Separator />)
  .add("HeaderTitle", () => <HeaderTitle title="Toolbox" />)
  .add("HeaderTitle with custom color", () => (
    <HeaderTitle color="blue" title="Toolbox" />
  ));
