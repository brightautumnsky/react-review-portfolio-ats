import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  margin: 0 auto;
  height: 70px;
  position: relative;
  img {
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    height: 50px;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <a href="/">
        <img src="/images/logo.png" alt="logo" />
      </a>
    </StyledLogo>
  );
}

export default Logo;
