import React from "react";
import styled from "styled-components";

const FooterMenuContainer = styled.div`
  height: 60px;
  line-height: 60px;
  ul {
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    li {
      font-size: 13px;
      a {
        color: #333;
      }
    }
    @media screen and (max-width: 767px) {
      li {
        font-size: 12px;
      }
    }
  }
`;

function FooterMenu() {
  return (
    <FooterMenuContainer>
      <ul>
        <li>공개리스트</li>
        <li>개인리스트</li>
        <li>
          <a href="/review">리뷰</a>
        </li>
        <li>
          <a href="/review/keyword">키워드</a>
        </li>
        <li>
          <a href="/search">검색</a>
        </li>
        <li>
          <a href="/ranking/top30">랭킹</a>
        </li>
      </ul>
    </FooterMenuContainer>
  );
}

export default FooterMenu;
