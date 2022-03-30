import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  margin: 0 auto;
  padding: 100px 150px;
  @media screen and (max-width: 767px) {
    padding: 100px 50px;
  }
`;

function PageContainer({ children }) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}

export default PageContainer;
