import React from "react";
import { GlobalStyle } from "../../ui";
import EquinorLogo from "../../assets/equinor.png";
import styled from "styled-components";
import Container from "./Container";
import Header from "./Header";
import Navigation from "./Navigation";

const Footer = styled.footer`
  padding-top: 20px;
  text-align: center;
`;

class Layout extends React.Component {
  render() {
    const { location, title, subTitle, children, menuLinks } = this.props;

    const rootPath = `${__PATH_PREFIX__}/`;

    const isHome = location && location.pathname === rootPath;

    return (
      <Container>
        <GlobalStyle />
        <Header
          isHome={isHome}
          logo={EquinorLogo}
          title={title}
          subTitle={subTitle}
        >
          {menuLinks && (
            <Navigation menuLinks={menuLinks} location={location} />
          )}
        </Header>
        {children}
        <Footer>Copyright © {new Date().getFullYear()} Equinor ASA</Footer>
      </Container>
    );
  }
}

export default Layout;
