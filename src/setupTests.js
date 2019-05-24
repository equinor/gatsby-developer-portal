import React from "react";
import ReactDOM from "react-dom";
import "jest-styled-components";

// Define globals to cut down on imports in test files
global.React = React;
global.ReactDOM = ReactDOM;

//setup for react-test-library and jest-dom
import "jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";
