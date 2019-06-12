import React from "react";
import { storiesOf } from "@storybook/react";
import { Consent } from "../src/components/Consent";

storiesOf("Consent", module).add("default", () => (
  <div>
    <Consent />
  </div>
));
