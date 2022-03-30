import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const sizes = {
  small: {
    fontSize: "1rem",
  },
  medium: {
    fontSize: "1.25rem",
  },
  large: {
    fontSize: "1.5rem",
  },
};

const sizeStyle = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 2.5rem;
  background: #fafafa;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${darken(0.2, "rgba(0, 0, 0, 0.07)")};
  }
  &:focus {
    outline: none;
  }

  /* 폰트 사이즈 */
  ${sizeStyle}
`;

function Button({ children, size, onClick }) {
  return (
    <ButtonContainer>
      <StyledButton size={size} onClick={onClick}>
        {children}
      </StyledButton>
    </ButtonContainer>
  );
}

Button.defaultProps = {
  size: "small",
};

export default Button;
