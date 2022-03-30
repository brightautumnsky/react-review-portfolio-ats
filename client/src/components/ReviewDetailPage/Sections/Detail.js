import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../utils/Button";
import Modal from "../../utils/Modal";

const StyledDetailReview = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;
  box-shadow: 3px 3px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 250px;
    height: 250px;
    margin-bottom: 70px;
  }
`;

const Content = styled.div`
  margin-bottom: 60px;
  p {
    margin: 24px 0;
    text-align: justify;
  }
`;

const Label = styled.span`
  background: #222;
  padding: 2px 6px;
  color: white;
  margin-right: 6px;
`;

// const ButtonBox = styled.div`
//   display: flex;
//   justify-content: center;
// `;

function Detail({ Reviewinfo, user }) {
  const { title, singer, genre, review, score, hashtag, image } = Reviewinfo;
  const [modalState, setModalState] = useState(false);

  const onModalStateHandler = () => {
    setModalState(!modalState);
  };

  // modalState - false
  // '삭제'버튼 클릭 modalState - true

  // 모달 창 생성

  // 모달 창의 '취소' '삭제' 버튼
  // '취소' 버튼 클릭 modalState - false

  return (
    <StyledDetailReview>
      <Image>
        <img
          src={`https://react-review-portfolio-ats.herokuapp.com/${image}`}
          alt="coverImg"
        />
      </Image>
      <Content>
        <p>
          <Label>곡명</Label> {title}
        </p>
        <p>
          <Label>가수명</Label> {singer}
        </p>
        <p>
          <Label>장르</Label> {genre}
        </p>
        <p>
          <Label>리뷰</Label> {review}
        </p>
        <p>
          <Label>평점</Label> {score}
        </p>
        <p>
          <Label>해시태그</Label> {hashtag}
        </p>
      </Content>
      {user.userData && user.userData.isAuth ? (
        <Button onClick={onModalStateHandler}>삭제</Button>
      ) : null}
      {modalState && (
        <Modal
          title="삭제하시겠습니까?"
          message="리뷰를 삭제합니다."
          onModalStateHandler={onModalStateHandler}
          target={title}
        />
      )}
    </StyledDetailReview>
  );
}

export default Detail;
