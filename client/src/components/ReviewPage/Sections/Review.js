import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const StyledReview = styled.div`
  width: 100%;
  height: 250px;
  padding: 12px;
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
    height: 400px;
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
  @media screen and (max-width: 1023px) {
    flex-basis: 170px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    img {
      width: 50%;
    }
  }
`;

const ReviewContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 72px;
  a {
    text-decoration: none;
    color: #333;
    p {
      margin: 0;
      color: #333;
      margin: 12px 0;
      width: 1000px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:nth-child(1) {
        font-size: 30px;
        @media screen and (max-width: 767px) {
          font-size: 18px;
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
  }
  @media screen and (max-width: 768px) {
    padding: 12px 36px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px 24px;
  }
`;

function Review({ review }) {
  return review.map((info, index) => (
    <StyledReview key={index}>
      <CoverImage>
        <img
          src={`https://react-review-portfolio-ats.herokuapp.com/${info.image}`}
          alt="coverImg"
        />
      </CoverImage>
      <ReviewContent>
        <a href={`/review/${info._id}`}>
          <p>
            <strong>{info.title}</strong>
          </p>
          <p>{info.singer}</p>
          <p>{info.review}</p>
          <p>{info.score} / 5.0</p>
          <p>
            <i>#{info.hashtag}</i>
          </p>
        </a>
      </ReviewContent>
    </StyledReview>
  ));
}

export default Review;
