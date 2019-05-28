import React from "react";
import ApiCircleIcon from "../assets/icons/circle_api.svg";
import OpenSourceCircleIcon from "../assets/icons/circle_open_source.svg";
import TechCircleIcon from "../assets/icons/circle_tech.svg";
import DesignCircleIcon from "../assets/icons/circle_design.svg";
import SecurityCircleIcon from "../assets/icons/circle_security.svg";
import ApiIcon from "../assets/icons/Api.svg";
import OpenSourceIcon from "../assets/icons/OpenSource.svg";
import TechIcon from "../assets/icons/Tech.svg";
import SecurityIcon from "../assets/icons/Security.svg";
import DesignIcon from "../assets/icons/Design.svg";
import DocumentIcon from "../assets/icons/Document.svg";

const IconEnum = {
  API: "api",
  DESIGN: "design",
  OPEN_SOURCE: "open-source",
  TECH: "tech",
  SECURITY: "security",
};
Object.freeze(IconEnum);
export { IconEnum };

export function getCircleIcon(tag) {
  switch (tag.toLowerCase()) {
    case IconEnum.API:
      return ApiCircleIcon;
    case IconEnum.DESIGN:
      return DesignCircleIcon;
    case IconEnum.OPEN_SOURCE:
      return OpenSourceCircleIcon;
    case IconEnum.SECURITY:
      return SecurityCircleIcon;
    case IconEnum.TECH:
      return TechCircleIcon;
    default:
      return null;
  }
}

export function getIcon(tag) {
  switch (tag.toLowerCase()) {
    case IconEnum.API:
      return ApiIcon;
    case IconEnum.DESIGN:
      return DesignIcon;
    case IconEnum.OPEN_SOURCE:
      return OpenSourceIcon;
    case IconEnum.SECURITY:
      return SecurityIcon;
    case IconEnum.TECH:
      return TechIcon;
    default:
      return DocumentIcon;
  }
}
