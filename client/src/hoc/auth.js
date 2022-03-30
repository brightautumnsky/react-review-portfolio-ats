import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_action";

function authHoc(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      // null => 아무나 출입 가능/ true => 로그인 유저만 출입 가능/ false => 로그인 유저는 출입 불가능
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);

    // 라우트 페이지가 쓸 수 있도록 props와 user를 전달
    return <SpecificComponent {...props} user={user} />;
  }

  return AuthenticationCheck;
}

export default authHoc;
