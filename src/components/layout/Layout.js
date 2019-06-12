import React from "react";
import { GlobalStyle } from "../../ui";
import EquinorLogo from "../../assets/equinor.png";
import styled from "styled-components";
import Container from "./Container";
import Header from "./Header";
import Navigation from "./Navigation";
import { Consent } from "../Consent";

const Footer = styled.footer`
  padding-top: 20px;
  text-align: center;
`;

const StickyWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 0;
`;

class Layout extends React.Component {
  render() {
    const { location, title, subTitle, children, menuLinks } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Header logo={EquinorLogo} title={title} subTitle={subTitle}>
          {menuLinks && (
            <Navigation menuLinks={menuLinks} location={location} />
          )}
        </Header>
        {children}
        <Footer>Copyright © {new Date().getFullYear()} Equinor ASA</Footer>
        <StickyWrapper>
          <Consent />
        </StickyWrapper>
      </Container>
    );
  }
}

export default Layout;
