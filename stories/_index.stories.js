import React from "react";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Separator from "../src/components/Separator";
import { HeaderTitle } from "../src/components/Titles";
import { DocHeader } from "../src/components/DocHeader";
import { BlogPostHeader } from "../src/templates/blog/BlogPostHeader";
import { mockAuthors } from "./mockData";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Separator", module).add("default", () => <Separator />);

storiesOf("HeaderTitle", module)
  .add("default", () => <HeaderTitle title="Toolbox" />)
  .add("with custom color", () => <HeaderTitle color="blue" title="Toolbox" />);

storiesOf("DocHeader", module)
  .add("api", () => <DocHeader tags={["api"]} title="Api" />)
  .add("tech", () => <DocHeader tags={["tech"]} title="Technology" />);

storiesOf("BlogPostHeader", module).add("default", () => (
  <BlogPostHeader title="Api" tags={["api"]} authors={mockAuthors} />
));
