import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";

const StyledMenu = styled.div`
  display: grid;
  justify-content: center;
  gap: 24px;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
  .item {
    overflow: hidden;
    cursor: pointer;
    &:hover img {
      transform: scale(1.1);
      transition: all 0.1s ease-in;
    }
    img {
      width: 105%;
    }
    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  .item {
    &:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
  .item {
    &:nth-child(3) {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .item {
    &:nth-child(4) {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .item {
    &:nth-child(5) {
      grid-row-start: 2;
      grid-row-end: 4;
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
  @media screen and (max-width: 767px) {
    gap: 12px;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }
`;

const Menu = styled.div`
  position: relative;
  h3 {
    font-size: 50px;
    margin: 0;
    z-index: 3;
    position: absolute;
    color: white;
    bottom: 1%;
    right: 5%;
    color: #fff;
    text-decoration: underline;
    @media screen and (max-width: 767px) {
      font-size: 30px;
    }
  }
`;

function MenuSection() {
  return (
    <SectionContainer>
      <StyledMenu>
        <Menu className="item">
          <a href="/playlist">
            <img src="/images/playlist.jpg" alt="playlist" />
            <h3>플레이리스트</h3>
          </a>
        </Menu>
        <Menu className="item">
          <a href="/ranking/top30">
            <img src="/images/ranking.jpg" alt="ranking" />
            <h3>랭킹</h3>
          </a>
        </Menu>
        <Menu className="item">
          <a href="/search">
            <img src="/images/search.png" alt="search" />
            <h3>검색</h3>
          </a>
        </Menu>
        <Menu className="item">
          <a href="/images/cover">
            <img src="/images/image.jpg" alt="img" />
            <h3>이미지</h3>
          </a>
        </Menu>
        <Menu className="item">
          <a href="/review">
            <img src="/images/review.jpg" alt="review" />
          </a>
          <h3>리뷰</h3>
        </Menu>
      </StyledMenu>
    </SectionContainer>
  );
}

export default MenuSection;
