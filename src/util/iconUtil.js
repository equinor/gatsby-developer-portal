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

export function getCircleIcon(tag) {
  switch (tag.toLowerCase()) {
    case "api":
      return ApiCircleIcon;
    case "open-source":
      return OpenSourceCircleIcon;
    case "tech":
      return TechCircleIcon;
    case "security":
      return SecurityCircleIcon;
    case "design":
      return DesignCircleIcon;
    default:
      throw `icon type ${tag} is not supported. `;
  }
}

export function getIcon(tag) {
  switch (tag.toLowerCase()) {
    case "api":
      return ApiIcon;
    case "open-source":
      return OpenSourceIcon;
    case "tech":
      return TechIcon;
    case "security":
      return SecurityIcon;
    case "design":
      return DesignIcon;
    default:
      return DocumentIcon;
  }
}
