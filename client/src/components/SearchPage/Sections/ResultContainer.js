import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  gap: 20px;
  padding: 32px 0;
  a {
    color: #222;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-auto-rows: 200px;
  }
  @media screen and (max-width: 766px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 270px;
  }
`;

function ResultContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ResultContainer;
