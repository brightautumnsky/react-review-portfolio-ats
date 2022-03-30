import React from "react";
import styled from "styled-components";

const StyledKeyword = styled.div`
  border: 5px solid #333;
  height: 100px;
  padding: 0 70px;
  display: flex;
  gap: 0 6px;
  align-items: center;
  span {
    margin: 0;
    text-align: justify;
  }
  span:nth-of-type(1) {
    flex: 6;
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
  span:nth-of-type(2) {
    flex: 1;
    background: #333;
    color: #eee;
    padding: 6px 12px;
    font-size: 30px;
    font-weight: 800;
    @media screen and (max-width: 1024px) {
      font-size: 25px;
      flex: 2;
    }
    @media screen and (max-width: 768px) {
      font-size: 15px;
      text-align: right;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }
`;

function Keyword({ reviews }) {
  return reviews.map((review, index) => (
    <StyledKeyword key={index}>
      <span>
        {review.singer} - <strong>{review.title}</strong>
      </span>
      <span>#{review.hashtag}</span>
    </StyledKeyword>
  ));
}

export default Keyword;
