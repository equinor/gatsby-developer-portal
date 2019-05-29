import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Layout from "../src/components/layout/Layout";
import { FullWidth } from "../src/components/FullWidth";

export const FullWidthDecorator = storyFn => <FullWidth>{storyFn()}</FullWidth>;
export const LayoutDecorator = storyFn => (
  <Layout title="Layout">{storyFn()}</Layout>
);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));
