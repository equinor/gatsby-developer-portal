import React from "react";
import { colors, typography } from "./style";
import { createGlobalStyle } from "styled-components";

// Global styles and resets
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${typography.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${colors.black80};
    font-family: Equinor;
	font-size: 18px;
	font-weight: 400;
	line-height: 34px;
	overflow-x: hidden;
	overflow-y: scroll;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }
  
  ::selection {
	background: ${colors.mossGreen};
	color: #fff;
  }

  ::-moz-selection {
	background: ${colors.mossGreen};
	color: #fff;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,  
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
    
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
    
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Equinor;
  }
  
  p {
	margin-bottom: 10px;
  }
    
  iframe {
    display: block;
    margin: 50px auto;
    width: 100%;
  }
  
  a {
    color: ${colors.black80}
    text-decoration: none;
  }
     
  a:hover {
    color: ${colors.hover}
  }
   
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: hsla(0,0%,0%,0.2);
    border: none;
    height: 1px;
  }
  
  .gatsby-highlight {
    font-size: 14px;
  }
`;

export default GlobalStyle;
