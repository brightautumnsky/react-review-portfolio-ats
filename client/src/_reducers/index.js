import { combineReducers } from "redux";
import user from "./user_reducer";

// combineReducers를 이용해서 rootReducer로 합쳐준다
const rootReducer = combineReducers({
  // 리듀서들의 목록
  user,
});

export default rootReducer;
