import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import media from "../../ui/media-query";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 40px;

  ${media.sm`
    align-items: flex-end;
    flex-direction: row;
  `};
`;

const Logo = styled.img`
  margin-right: 60px;
`;

const Titles = styled.div`
  text-align: center;
  //display: flex;
  //align-items: baseline;
  //justify-content: center;
  padding: 40px;
  margin-bottom: 30px;
  //flex-direction: row;
`;

const Title = styled.h1`
  display: inline;
  margin: 0 0 0.25em;
  font-weight: 700;
  line-height: 1;
  word-spacing: 0.08em;
  font-size: 1.8em;
  color: black;

  a {
    color: black;
    text-decoration: none;
    border: none;
  }
`;

export const SubTitle = styled.h2`
  margin: 0 0 0 1em;
  font-size: 0.8em;
  font-weight: 300;
  color: gray;
`;

// https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783
const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: row;

  ${media.sm`
    flex-direction: column;
    align-items: flex-end;
  `};
`;

const Header = ({ isHome, children, title, subTitle, logo }) => (
  <div>
    <Wrapper>
      {logo && (
        <Link to="/">
          <Logo src={logo} />
        </Link>
      )}
      <NavBar>{children}</NavBar>
    </Wrapper>
    {isHome && (
      <Titles>
        <a href="/">{title && <Title>{title}</Title>}</a>
        <SubTitle>{subTitle}</SubTitle>
      </Titles>
    )}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default Header;
