import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const StyledResult = styled.div`
  width: 250px;
  height: 250px;
  border: 3px solid;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.07);
  padding: 30px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  &:hover {
    background: ${darken(0.2, "rgba(0,0,0,0.1)")};
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 766px) {
    width: 270px;
    height: 270px;
  }
`;

const Image = styled.div`
  height: 50%;
  margin: 0 auto;
  img {
    height: 100%;
  }
`;

const Content = styled.div`
  height: 50%;
  padding: 12px;
`;

function Result({ title, genre, img }) {
  return (
    <StyledResult>
      <Image>
        <img
          src={`https://react-review-portfolio-ats.herokuapp.com/${img}`}
          alt="coverImg"
        />
      </Image>
      <Content>
        <p>{title}</p>
        <p>{genre}</p>
      </Content>
    </StyledResult>
  );
}

export default Result;
