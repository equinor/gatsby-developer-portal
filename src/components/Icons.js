import React from "react";
import ApiCircleIcon from "../assets/icon_tag/frame/Api.svg";
import OpenSourceCircleIcon from "../assets/icon_tag/frame/OpenSource.svg";
import TechCircleIcon from "../assets/icon_tag/frame/Tech.svg";
import DesignCircleIcon from "../assets/icon_tag/frame/Design.svg";
import SecurityCircleIcon from "../assets/icon_tag/frame/Security.svg";
import GeneralCircleIcon from "../assets/icon_tag/frame/General.svg";
import ApiIcon from "../assets/icon_tag/Api.svg";
import OpenSourceIcon from "../assets/icon_tag/OpenSource.svg";
import TechIcon from "../assets/icon_tag/Tech.svg";
import SecurityIcon from "../assets/icon_tag/Security.svg";
import DesignIcon from "../assets/icon_tag/Design.svg";
import GeneralIcon from "../assets/icon_tag/General.svg";

export const IconEnum = {
  API: "api",
  DESIGN: "design",
  OPEN_SOURCE: "open-source",
  TECH: "tech",
  SECURITY: "security",
  GENERAL: "general",
};
Object.freeze(IconEnum);

/**
 *
 * @param tag string
 * @param size default viewBox width/height.
 * @returns {*} svg component
 * @constructor
 */
export function CircleIcon({ tag, size = 72 }) {
  switch (tag.toLowerCase()) {
    case IconEnum.API:
      return <ApiCircleIcon width={size} height={size} />;
    case IconEnum.DESIGN:
      return <DesignCircleIcon width={size} height={size} />;
    case IconEnum.OPEN_SOURCE:
      return <OpenSourceCircleIcon width={size} height={size} />;
    case IconEnum.SECURITY:
      return <SecurityCircleIcon width={size} height={size} />;
    case IconEnum.TECH:
      return <TechCircleIcon width={size} height={size} />;
    default:
      return <GeneralCircleIcon width={size} height={size} />;
  }
}

/**
 *
 * @param tag string
 * @param size default viewBox width/height.
 * @returns {*} svg component
 * @constructor
 */
export function Icon({ tag, size = 56 }) {
  switch (tag.toLowerCase()) {
    case IconEnum.API:
      return <ApiIcon width={size} height={size} />;
    case IconEnum.DESIGN:
      return <DesignIcon width={size} height={size} />;
    case IconEnum.OPEN_SOURCE:
      return <OpenSourceIcon width={size} height={size} />;
    case IconEnum.SECURITY:
      return <SecurityIcon width={size} height={size} />;
    case IconEnum.TECH:
      return <TechIcon width={size} height={size} />;
    default:
      return <GeneralIcon width={size} height={size} />;
  }
}
