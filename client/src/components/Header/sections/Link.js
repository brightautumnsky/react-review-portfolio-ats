import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #fff;
  font-size: 12px;
  padding-left: 30px;
  span {
    margin-right: 12px;
    cursor: pointer;
  }
  a {
    color: white;
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
    font-size: 12px;
  }
`;

function Link() {
  const onMailHandler = () => {
    const email = "brightautumnsky21@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("메일 주소가 복사되었습니다.");
    });
  };

  return (
    <StyledLink>
      <span>
        <a href="https://github.com/brightautumnsky/react-review-portfolio-ats">
          깃허브
        </a>
      </span>
      <span onClick={onMailHandler}>메일</span>
    </StyledLink>
  );
}

export default Link;
