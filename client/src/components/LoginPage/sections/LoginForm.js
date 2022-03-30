import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";
import Input from "../../utils/Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  span {
    font-size: 13px;
    color: #333;
  }
`;

function LoginForm({ sf, cf, email, password }) {
  return (
    <StyledForm onSubmit={sf}>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={cf}
        placeholder="이메일"
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={cf}
        placeholder="비밀번호"
      />
      <Button>
        <span>로그인</span>
      </Button>
    </StyledForm>
  );
}

export default LoginForm;
