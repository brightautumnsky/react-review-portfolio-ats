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

function RegisterForm({ sf, cf, email, name, pw, cp }) {
  return (
    <StyledForm onSubmit={sf}>
      <Input
        type="text"
        name="username"
        value={name}
        onChange={cf}
        placeholder="이름"
      />
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
        value={pw}
        onChange={cf}
        placeholder="비밀번호"
      />
      <Input
        type="password"
        name="confirmPassword"
        value={cp}
        onChange={cf}
        placeholder="비밀번호 확인"
      />
      <Button size="small">가입</Button>
    </StyledForm>
  );
}

export default RegisterForm;
