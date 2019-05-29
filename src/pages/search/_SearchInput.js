import styled from "styled-components";
import React from "react";

const SearchInputStyle = styled.input`
  font-weight: 500;
  width: 100%;
  outline: none;
  font-size: 48px;
  letter-spacing: -0.1px;
  line-height: 52px;
  padding: 30px 0;
  text-align: center;
  background-color: rgba(255, 18, 67, 0.1);
  border: 0;
`;

export const SearchInput = ({ value, onChange }) => {
  return (
    <form>
      <SearchInputStyle
        aria-label="search"
        autoFocus
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};
