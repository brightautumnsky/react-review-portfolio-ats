import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 170px;
  padding-top: 16px;
  background: #111;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 160px;
  }
`;

function HeaderContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default HeaderContainer;
