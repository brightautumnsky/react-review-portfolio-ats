import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import useInputs from "../../hooks/useInputs";
import PageContainer from "../utils/PageContainer";
import LoginContainer from "./sections/LoginContainer";
import LoginForm from "./sections/LoginForm";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [inputs, onChange] = useInputs({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    if (!email || !password) {
      return alert("모든 항목을 입력해주세요.");
    }

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    });
  };

  return (
    <PageContainer>
      <LoginContainer>
        <h4>음악 취향 공유, 이어폰 한 쪽</h4>
        <LoginForm
          sf={onSubmit}
          cf={onChange}
          email={email}
          password={password}
        />
      </LoginContainer>
    </PageContainer>
  );
}

export default withRouter(LoginPage);
