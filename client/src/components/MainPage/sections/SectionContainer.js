import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin-bottom: 150px;
  h1 {
    text-align: center;
    span {
      font-size: 12px;
      font-weight: 300;
      margin-left: 3px;
      background: #333;
      color: #fff;
      padding: 3px 6px;
      a {
        color: #fff;
      }
    }
  }
`;

function SectionContainer({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default SectionContainer;
