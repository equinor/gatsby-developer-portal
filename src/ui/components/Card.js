import React from 'react';
import styled from 'styled-components';
import media from '../media-query';

const CardWrapper = styled.div`
  display: flex;
  // Mobile friendly by default
  flex-direction: column;

  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  // Switch to rows on large devices
  ${media.xl`
    flex-direction: row;
  `};
`;

export default CardWrapper;
