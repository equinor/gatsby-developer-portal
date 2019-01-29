import React from 'react'
import GlobalStyle from '../ui/global-style';
import '../fonts.css';
import EquinorLogo from '../assets/equinor.png';
import styled from 'styled-components';
import Container from '../ui/components/container';
import Header from '../ui/components/header';
import HeaderMenu from '../components/header'

const Footer = styled.footer`
  padding-top: 20px;
  text-align: center;
`;


const menuLinks =
    [
        {
            name: "Blog",
            link: "/"
        },
        {
            name: "Arkiv",
            link: "/archive"
        }
    ];

class Layout extends React.Component {
    render() {
        const {
            location,
            title,
            subTitle,
            children
        } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;

        const isHome = location.pathname === rootPath;

        return (
            <Container>
                <GlobalStyle/>
                <Header
                    isHome={isHome}
                    logo={EquinorLogo}
                    title={title}
                    subTitle={subTitle}>
                    <HeaderMenu
                        menuLinks={menuLinks}
                        location={location}
                    />
                </Header>
                {children}
                <Footer>
                    Copyright © {new Date().getFullYear()} Equinor ASA
                </Footer>
            </Container>
        )
    }
}

export default Layout
