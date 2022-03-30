import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 200px;
  h4 {
    text-align: center;
  }
`;

function LoginContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default LoginContainer;
