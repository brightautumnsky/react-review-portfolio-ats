import React from "react";
import styled from "styled-components";

const FooterLogoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  img {
    height: 100%;
    margin-right: 25px;
  }
  p {
    margin: 0;
    font-size: 15px;
    span {
      text-decoration: underline;
      a {
        color: #111;
      }
    }
  }
`;

function FooterLogo() {
  return (
    <FooterLogoContainer>
      <img src="/images/logo-transparent.png" alt="logo" />
      <p>
        제작 과정은{" "}
        <span>
          <a href="https://ats-portfolio-site.netlify.app/">
            포트폴리오 사이트
          </a>
        </span>
        에서 확인하실 수 있습니다.
      </p>
    </FooterLogoContainer>
  );
}

export default FooterLogo;
