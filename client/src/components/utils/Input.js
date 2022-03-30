import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  background: transparent;
  border: none;
  height: 3rem;
  background: #fafafa;
  &:focus {
    outline: none;
    color: #333;
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

function Input({ type, value, name, onChange, placeholder, width }) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      width={width}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
