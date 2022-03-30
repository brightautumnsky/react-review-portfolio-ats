import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 리덕스 사용
import { Provider } from "react-redux";
// 미들웨어와 스토어 사용
import { applyMiddleware, createStore } from "redux";
// 미들웨어 임포트
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

// import한 promise와 thunk 미들웨어를 넣어준다
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  // Provider 컴포넌트로 App 컴포넌트를 감싸주어 리덕스와 어플리케이션을 연결한다
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      // redux dev tool extension을 넣어준다
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
