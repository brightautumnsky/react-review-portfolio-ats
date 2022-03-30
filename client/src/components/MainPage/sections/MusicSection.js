import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";

const MusicContainer = styled.div`
  padding: 0 120px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 260px);
  grid-auto-rows: 450px;
  @media screen and (max-width: 1200px) {
    padding: 0px;
    grid-template-columns: repeat(2, 260px);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

const StyledMusic = styled.div`
  border: 3px solid #333;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2);
  img {
    width: 70%;
    align-self: center;
  }
  a {
    color: #333;
    p {
      padding: 12px 24px;
      margin: 0;
      &:nth-of-type(1) {
        font-size: 20px;
        font-weight: 800;
      }
      &:nth-of-type(3) {
        text-align: right;
      }
    }
  }
`;

function MusicSection({ reviews }) {
  return (
    <SectionContainer>
      <h1>
        리뷰
        <span>
          <a href="/review">더보기</a>
        </span>
      </h1>
      <MusicContainer>
        {reviews.map((review, index) => (
          <StyledMusic key={index}>
            <img
              src={`https://react-review-portfolio-ats.herokuapp.com/${review.image}`}
              alt="coverImg"
            />
            <a href={`/review/${review._id}`}>
              <p>
                <strong>{review.title}</strong>
              </p>
              <p>{review.singer}</p>
              <p>{review.score} / 5.0</p>
            </a>
          </StyledMusic>
        ))}
      </MusicContainer>
    </SectionContainer>
  );
}

export default MusicSection;
