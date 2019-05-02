import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.size};

  &:before,
  &:after {
    display: block;
    height: 0px;
    visibility: hidden;
  }

  &:before {
    margin-bottom: 2em;
  }

  &:after {
    margin-top: 2em;
  }
`;

const Title = styled.h2`
  margin-top: 20px;
`;

const Section = ({ title, children, size }) => (
  <Wrapper>
    <Container size={size}>
      <Title>{title}</Title>
      {children}
    </Container>
  </Wrapper>
);

Section.propTypes = {
  size: PropTypes.string,
};

Section.defaultProps = {
  size: "1024px",
};

export default Section;
