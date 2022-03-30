import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import useInputs from "../../hooks/useInputs";
import PageContainer from "../utils/PageContainer";
import RegisterContainer from "./sections/RegisterContainer";
import RegisterForm from "./sections/RegisterForm";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [inputs, onChange] = useInputs({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const { email, password, username, confirmPassword } = inputs;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    if (!email || !password || !username || !confirmPassword) {
      return alert("모든 항목을 입력해주세요.");
    }

    let body = {
      username,
      email,
      password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("failed to sign up");
      }
    });
  };

  return (
    <PageContainer>
      <RegisterContainer>
        <h4>음악 취향 공유, 이어폰 한 쪽</h4>
        <RegisterForm
          sf={onSubmit}
          cf={onChange}
          name={username}
          email={email}
          pw={password}
          cp={confirmPassword}
        />
      </RegisterContainer>
    </PageContainer>
  );
}

export default withRouter(RegisterPage);
