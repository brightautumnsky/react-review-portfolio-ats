import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope, FaCheck } from "react-icons/fa";
import SectionContainer from "./SectionContainer";

const StyledService = styled.div`
  height: 600px;
  position: relative;
  @media screen and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`;

const Service = styled.div`
  position: absolute;
  width: 350px;
  height: 300px;
  padding: 36px 12px;
  box-sizing: border-box;
  line-height: 300px;
  background: rgba(0, 0, 0, 0.8);
  top: 30%;
  left: 3%;
  text-align: right;
  z-index: 3;
  span {
    font-size: 30px;
    font-weight: 800;
    a {
      color: #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 250px;
    top: -5%;
    span {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    height: 200px;
    top: 0;
    span {
      font-size: 19px;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding-left: 20%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #889eaf;
`;

const StyledIcon = styled.div`
  font-size: 70px;
  z-index: 8;
  a {
    color: #fff;
    font-size: 70px;
  }
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 800px;
    color: #fff;
  }
  @media screen and (max-width: 767px) {
    font-size: 30px;
    align-self: flex-end;
    a {
      font-size: 30px;
    }
  }
`;

const StyledMessage = styled.div`
  position: fixed;
  width: 250px;
  height: 150px;
  padding: 0 24px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  z-index: 7;
  h1 {
    color: white;
    text-align: right;
  }
`;

function ServiceSection() {
  const [click, setClick] = useState(false);

  const mailHandler = () => {
    const email = "brightautumnsky21@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("메일 주소가 복사되었습니다.");
    });
  };

  const clickHandler = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(false);
    }, 2000);
  };

  return (
    <SectionContainer>
      <StyledService>
        <Service>
          <span>
            <a href="https://ats-portfolio-site.netlify.app/">
              🚀 포트폴리오 사이트
            </a>
          </span>
        </Service>
        <IconContainer>
          <StyledIcon>
            <a href="/">
              <FaGithub />
            </a>
            <p>
              <a href="https://github.com/brightautumnsky/react-review-portfolio-ats">
                Github
              </a>
            </p>
          </StyledIcon>
          <StyledIcon>
            <FaEnvelope onClick={mailHandler} />
            <p>Email</p>
          </StyledIcon>
          <StyledIcon>
            <FaCheck onClick={clickHandler} />
            <p>Click me!</p>
          </StyledIcon>
        </IconContainer>
      </StyledService>
      {click ? (
        <StyledMessage>
          <h1>
            방문해주셔서
            <br />
            감사합니다!
          </h1>
        </StyledMessage>
      ) : null}
    </SectionContainer>
  );
}

export default ServiceSection;
