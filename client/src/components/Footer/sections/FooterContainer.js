import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 160px;
  padding: 10px 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  color: #555;
  @media screen and (max-width: 767px) {
    padding: 10px 30px;
  }
`;

function FooterContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default FooterContainer;
