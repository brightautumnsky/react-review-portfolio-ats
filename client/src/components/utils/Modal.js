import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "../utils/Button";
import axios from "axios";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.07);
`;

const StyledModalContainer = styled.div`
  width: 600px;
  height: 300px;
  padding: 36px;
  background: white;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 270px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 36px;
  gap: 0 12px;
`;

function Modal(props) {
  const { title, message, modalState, onModalStateHandler, target } = props;
  const onDeleteHandler = () => {
    const body = {
      title: target,
    };

    axios.post("/api/review/delete", body).then((response) => {
      if (!response.data.success) {
        alert("리뷰 삭제에 실패했습니다.");
      }
    });

    onModalStateHandler(!modalState);
    props.history.push("/review");
  };

  return (
    !modalState && (
      <Background>
        <StyledModalContainer>
          <h2>{title}</h2>
          <p>{message}</p>
          <ButtonContainer>
            <Button onClick={onModalStateHandler}>취소</Button>
            <Button onClick={onDeleteHandler}>삭제</Button>
          </ButtonContainer>
        </StyledModalContainer>
      </Background>
    )
  );
}

export default withRouter(Modal);
