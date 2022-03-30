import React from "react";
import { useSelector } from "react-redux";
import HeaderContainer from "./sections/HeaderContainer";
import UserSign from "./sections/UserSign";
import Link from "./sections/Link";
import Logo from "./sections/Logo";
import Navbar from "./sections/Navbar";

function Header() {
  const user = useSelector((state) => state.user);
  const isAuth = user.userData && user.userData.isAuth;

  return (
    <HeaderContainer>
      <Link />
      <UserSign isAuth={isAuth} />
      <Logo />
      <Navbar />
    </HeaderContainer>
  );
}
export default Header;
