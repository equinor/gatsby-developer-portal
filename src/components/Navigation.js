import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";
import Style from "../ui/style";

const Nav = styled.nav`
  display: flex;
  flex: 1;
  list-style: none;
  font-size: 18px;
  line-height: 1.3;
  font-style: normal;
  color:  ${Style.colors.black80};
`;

const NavList = styled.li`
  font-size: 1.2em;
  line-height: 1.3;
  height: 40px;
  
`;

const NavLink = styled(Link)`
  padding: 10px 0px 10px;
  text-decoration: none;   
  font-weight: 500;  
  font-size: 16px;
  text-transform: initial;
  letter-spacing: normal; 
  position: relative;
  display: inline-block;
  margin-right: 12px;
   
  ${props => props.styled.isActive && `
    :after {
        border-width: 2px;
        width: 100%;
        display: block;
        content: "";
        border-bottom: 2px solid #ff1243;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width 0.3s ease-in-out;
        z-index: 1;
      }
  `};
`;

const ExternalLink = styled.a`
  padding: 10px 0px 10px;
  text-decoration: none;   
  font-weight: 500;  
  font-size: 16px;
  text-transform: initial;
  letter-spacing: normal; 
  position: relative;
  display: inline-block;
  margin-right: 12px;
   
  ${props => props.styled.isActive && `
    :after {
        border-width: 2px;
        width: 100%;
        display: block;
        content: "";
        border-bottom: 2px solid #ff1243;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width 0.3s ease-in-out;
        z-index: 1;
      }
  `};
`;

const Navigation = ({menuLinks, location}) => (
    <Nav>
        <NavList>
            {
                menuLinks.map(link => {
                    const isActive = link.link === location.pathname;
                    const isLink = link.link;
                    if (isLink) {
                        return (
                            <NavLink
                                key={link.name}
                                styled={{isActive}}
                                to={link.link}>
                                {link.name}
                            </NavLink>
                        )
                    } else {
                        return (
                            <ExternalLink
                                target="_blank"
                                key={link.name}
                                styled={{isActive}}
                                href={link.url}>
                                {link.name}
                            </ExternalLink>
                        )
                    }

                })
            }
        </NavList>
    </Nav>
);

export default Navigation;
