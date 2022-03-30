import React from "react";
import styled from "styled-components";

const CopyrightContainer = styled.div`
  height: 20px;
  p {
    text-align: center;
    font-size: 12px;
  }
`;

function FooterCopyright() {
  return (
    <CopyrightContainer>
      <p>brightautumnsky.21@gmail.com</p>
    </CopyrightContainer>
  );
}

export default FooterCopyright;
