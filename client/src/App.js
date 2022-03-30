import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Header from "./components/Header/Header";
import UploadPage from "./components/UploadPage/UploadPage";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import RankingPage from "./components/RankingPage/RankingPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import ReviewDetailPage from "./components/ReviewDetailPage/ReviewDetailPage";
import ImagePage from "./components/ImagePage/ImagePage";
import SearchPage from "./components/SearchPage/SearchPage";
import KeywordPage from "./components/KeywordPage/KeywordPage";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Spoqa Han Sans Neo';
}
ul {
  list-style: none;
  padding: 0;
}
a {
text-decoration: none;
}
`;

function App() {
  // 페이지 이동 Router
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <div>
        <Header style={{ zIndex: "1000" }} />
        <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/write" component={Auth(UploadPage, true)} />
          <Route exact path="/review" component={Auth(ReviewPage, null)} />
          <Route
            exact
            path="/review/keyword"
            component={Auth(KeywordPage, null)}
          />
          <Route
            exact
            path="/review/:id"
            component={Auth(ReviewDetailPage, null)}
          />
          <Route exact path="/images/cover" component={Auth(ImagePage, null)} />
          <Route
            exact
            path="/ranking/top30"
            component={Auth(RankingPage, null)}
          />
          <Route exact path="/search" component={Auth(SearchPage, null)} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
