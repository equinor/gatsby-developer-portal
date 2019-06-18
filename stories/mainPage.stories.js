import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../src/pages";
import { FullWidthDecorator, LayoutDecorator } from "./index.stories";

const description =
  "" +
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus dolor, " +
  "placerat eget vulputate rhoncus, aliquam ut velit. Duis gravida, leo quis varius iaculis, " +
  "sapien orci aliquam sem, ac accumsan risus nunc et massa.";

storiesOf("Main page", module)
  .addDecorator(LayoutDecorator)
  .addDecorator(FullWidthDecorator)
  .add("MainPage Header", () => <Header description={description} />);
