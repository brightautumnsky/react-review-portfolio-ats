import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

function RankingContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default RankingContainer;
