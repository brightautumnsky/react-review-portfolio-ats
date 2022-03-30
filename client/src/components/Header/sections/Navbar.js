import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  padding: 0 150px;
  color: #fff;
  position: relative;
  border-bottom: 1px solid #fff;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      a {
        color: #fff;
      }
      ul {
        margin-top: 5px;
        position: absolute;
        top: 60px;
        li {
          margin-right: 12px;
          @media screen and (max-width: 767px) {
            margin-bottom: 3px;
          }
        }
        @media screen and (max-width: 1023px) {
          top: 65px;
          display: flex;
        }
        @media screen and (max-width: 767px) {
          top: 45px;
          flex-direction: column;
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    padding: 0 50px;
    font-size: 15px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 20px;
    font-size: 11px;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          플레이리스트
          <ul>
            <li>공유리스트</li>
            <li>개인리스트</li>
          </ul>
        </li>
        <li>
          리뷰
          <ul>
            <li>
              <a href="/write">작성</a>
            </li>
            <li>
              <a href="/review">상세</a>
            </li>
            <li>
              <a href="/review/keyword">키워드</a>
            </li>
          </ul>
        </li>
        <li>
          랭킹
          <ul>
            <a href="/ranking/top30">top30</a>
          </ul>
        </li>
        <li>
          검색
          <ul>
            <li>플레이리스트</li>
            <li>
              <a href="/search">리뷰</a>
            </li>
          </ul>
        </li>
        <li>
          이미지
          <ul>
            <li>
              <a href="/images/cover">커버</a>
            </li>
          </ul>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
