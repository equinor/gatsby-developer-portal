import React from "react";
import { storiesOf } from "@storybook/react";
import { CircleIcon, Icon, IconEnum } from "../src/components/Icons";

storiesOf("Icons", module).add("All icons", () => (
  <React.Fragment>
    <Icon tag={IconEnum.API} />
    <Icon tag={IconEnum.TECH} />
    <Icon tag={IconEnum.SECURITY} />
    <Icon tag={IconEnum.OPEN_SOURCE} />
    <Icon tag={IconEnum.DESIGN} />
    <Icon tag={IconEnum.GENERAL} />
  </React.Fragment>
));

storiesOf("Icons", module).add("Different sizes", () => (
  <React.Fragment>
    <Icon tag={IconEnum.API} size={20} />
    <Icon tag={IconEnum.API} size={100} />
    <Icon tag={IconEnum.API} size={200} />
  </React.Fragment>
));

storiesOf("Circle Icons", module).add("All icons", () => (
  <React.Fragment>
    <CircleIcon tag={IconEnum.API} />
    <CircleIcon tag={IconEnum.TECH} />
    <CircleIcon tag={IconEnum.SECURITY} />
    <CircleIcon tag={IconEnum.OPEN_SOURCE} />
    <CircleIcon tag={IconEnum.DESIGN} />
    <CircleIcon tag={IconEnum.GENERAL} />
  </React.Fragment>
));

storiesOf("Circle Icons", module).add("Different sizes", () => (
  <React.Fragment>
    <CircleIcon tag={IconEnum.SECURITY} size={20} />
    <CircleIcon tag={IconEnum.SECURITY} size={100} />
    <CircleIcon tag={IconEnum.SECURITY} size={200} />
  </React.Fragment>
));
