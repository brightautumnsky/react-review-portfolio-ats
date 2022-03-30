import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  margin-bottom: 60px;
`;

function KeywordContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default KeywordContainer;
