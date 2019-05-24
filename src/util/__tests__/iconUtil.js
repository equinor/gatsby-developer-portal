import React from "react";
import { getCircleIcon, getIcon, IconEnum } from "../iconUtil";

const FILE_STUB = "test-file-stub";

describe("iconUtil", () => {
  it("should get Icon", () => {
    expect(getIcon(IconEnum.API)).toBe(FILE_STUB);
    expect(getIcon(IconEnum.TECH)).toBe(FILE_STUB);
    expect(getIcon(IconEnum.OPEN_SOURCE)).toBe(FILE_STUB);
    expect(getIcon(IconEnum.SECURITY)).toBe(FILE_STUB);
    expect(getIcon(IconEnum.DESIGN)).toBe(FILE_STUB);
    expect(getIcon("not supported.")).toBe(FILE_STUB);
  });

  it("should get CircleIcon", () => {
    expect(getCircleIcon(IconEnum.API)).toBe(FILE_STUB);
    expect(getCircleIcon(IconEnum.TECH)).toBe(FILE_STUB);
    expect(getCircleIcon(IconEnum.OPEN_SOURCE)).toBe(FILE_STUB);
    expect(getCircleIcon(IconEnum.SECURITY)).toBe(FILE_STUB);
    expect(getCircleIcon(IconEnum.DESIGN)).toBe(FILE_STUB);
  });

  it("should throw on unsupported tag", () => {
    expect(() => {
      getCircleIcon("invalid");
    }).toThrow();
  });
});
