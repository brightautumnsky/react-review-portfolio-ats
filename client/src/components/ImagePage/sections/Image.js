import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  box-sizing: border-box;
  width: 280px;
  height: 280px;
  background: white;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.07);
  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 767px) {
    width: 270px;
    height: 270px;
  }
`;

const CoverImage = styled.div`
  width: 250px;
  height: 190px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 190px;
  }
  @media screen and (max-width: 767px) {
    width: 240px;
  }
`;

const Description = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  text-align: right;
`;

function Image({ image, title }) {
  return (
    <StyledImage>
      <CoverImage>
        <img
          src={`https://react-review-portfolio-ats.herokuapp.com/${image}`}
          alt="coverImg"
        />
      </CoverImage>
      <Description>
        <p>
          <u>{title}</u>
        </p>
      </Description>
    </StyledImage>
  );
}

export default Image;
