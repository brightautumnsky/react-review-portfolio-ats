import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 280px;
  gap: 24px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 220px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 270px;
  }
`;

function ImageContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ImageContainer;
