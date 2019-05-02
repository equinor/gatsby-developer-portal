import { css } from "styled-components";

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const remSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${remSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
