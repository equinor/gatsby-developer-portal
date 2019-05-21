import React from "react";
import { style } from "../../ui";
import { DocHeader } from "../DocHeader";
import { HeaderTitle } from "../Titles";
import { Tag } from "../Tags";
import * as iconUtil from "../../util/iconUtil";

const getCircleIconSpy = jest.spyOn(iconUtil, "getCircleIcon");

describe("DocHeader", () => {
  describe("Basic", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<DocHeader tags={["Api"]} title="Documents" />);
    });

    describe("HeaderTitle", () => {
      let headerTitleWrapper;

      beforeEach(() => {
        headerTitleWrapper = wrapper.find(HeaderTitle);
      });

      it("should exist", () => {
        expect(headerTitleWrapper.exists()).toBe(true);
      });

      it("should have title", () => {
        expect(headerTitleWrapper.prop("title")).toBe("Documents");
      });

      it("should have default color", () => {
        expect(headerTitleWrapper.prop("color")).toBe(style.colors.mossGreen);
      });

      it("should be aligned", () => {
        expect(headerTitleWrapper.prop("alignCenter")).toBe(true);
      });
    });

    it("should get icon", () => {
      expect(getCircleIconSpy).toHaveBeenCalledWith("Api");
    });

    it("should have tag", () => {
      const tagWrapper = wrapper.find(Tag);
      expect(tagWrapper.exists()).toBe(true);
    });
  });

  describe("Custom color", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<DocHeader color="blue" tags={["tech"]} />);
    });

    it("should have custom blue", () => {
      const headerTitleWrapper = wrapper.find(HeaderTitle);
      expect(headerTitleWrapper.prop("color")).toBe(style.colors.mossGreen);
    });
  });
});
