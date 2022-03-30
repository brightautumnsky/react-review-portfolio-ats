import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

// state = {} 초기값 설정해야 redux 오류 나지 않는다
function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      // register: 이 이름은 마음대로 정해도 됨
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}

export default userReducer;
