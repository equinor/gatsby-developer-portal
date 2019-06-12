import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../assets/icons/close-equinor-button.svg";
import { colors } from "../ui";
import { FullWidth } from "./FullWidth";

function getCookie(name) {
  if (typeof window !== `undefined`) {
    var match =
      window && document && document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  }
  return undefined;
}

export const Consent = () => {
  const isCookiePresent =
    getCookie("mtm_consent_removed") !== undefined ||
    getCookie("mtm_consent") !== undefined;
  //hide banner if user has a mtm cookie.
  const [hideBanner, setHideBanner] = useState(isCookiePresent);
  //check if user previously has refused consent.
  if (hideBanner) {
    return null;
  }

  const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `;

  const onClose = () => {
    // window is not present during build time. Avoid breaking the build.
    if (typeof window !== 'undefined' && window._paq) {
      window._paq.push(["setConsentGiven"]);
      window._paq.push(["rememberConsentGiven"]);
    }
    setHideBanner(true);
  };
  return (
    <FullWidth backgroundColor={colors.lighterGray}>
      <Banner>
        <div style={{ display: "inline-flex" }}>
          We use cookies to provide the best possible experience for you. By
          closing this message you agree to our use of cookies. You can learn
          more about cookies on our privacy and settings page.
        </div>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <div onClick={onClose}>
            <CloseIcon style={{ width: 30, height: 30 }} />
          </div>
        </div>
      </Banner>
    </FullWidth>
  );
};
