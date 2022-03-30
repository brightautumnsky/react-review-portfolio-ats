import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const StyledRanking = styled.div`
  width: 100%;
  padding: 24px;
  height: fit-content;
  border: 3px solid #333;
  display: flex;
  &:hover {
    background: ${darken(0.2, "rgba(0,0,0,0.1)")};
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 200px;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    height: 300px;
    flex-direction: column;
  }
`;

const CoverImage = styled.div`
  flex-basis: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    flex-basis: 170px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    img {
      width: 45%;
    }
  }
`;

const RankingContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 72px;
  p {
    color: #333;
    margin: 0;
    width: 1000px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:nth-child(1) {
      font-size: 30px;
      font-weight: 800;
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
    span {
      font-size: 100px;
      color: #666;
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 70px;
      }
      @media screen and (max-width: 767px) {
        font-size: 50px;
      }
    }
    @media screen and (max-width: 1400px) {
      width: 400px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 200px;
    }
    @media screen and (max-width: 767px) {
      width: 150px;
    }
  }
  p:nth-of-type(1) {
    margin-bottom: 12px;
  }
  p:nth-of-type(3) {
    text-align: right;
  }
  @media screen and (max-width: 768px) {
    padding: 12px 36px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px 24px;
  }
`;

const scoreFunction = (score) => {
  let emotion = score > 3.5 ? "😄" : "🥲";
  return (
    <p>
      <span>{score}</span> / 5.0 {emotion}
    </p>
  );
};

function Ranking({ review }) {
  return review.map((info, index) => (
    <StyledRanking key={index}>
      <CoverImage>
        <img
          src={`https://react-review-portfolio-ats.herokuapp.com/${info.image}`}
          alt="coverImg"
        />
      </CoverImage>
      <RankingContent>
        <p>{info.title}</p>
        <p>{info.review}</p>
        {scoreFunction(info.score)}
      </RankingContent>
    </StyledRanking>
  ));
}

export default Ranking;
