import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyledUserSign = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #fff;
  font-size: 12px;
  padding-right: 30px;
  span {
    margin-left: 12px;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
    padding-right: 0;
    font-size: 12px;
  }
`;

function UserSign({ isAuth }) {
  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (!response.data.success) {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <StyledUserSign>
      {isAuth ? (
        <span onClick={logoutHandler}>
          <a href="/">로그아웃</a>
        </span>
      ) : (
        <>
          <span>
            <a href="/register">회원가입</a>
          </span>
          <span>
            <a href="/login">로그인</a>
          </span>
        </>
      )}
    </StyledUserSign>
  );
}

export default UserSign;
