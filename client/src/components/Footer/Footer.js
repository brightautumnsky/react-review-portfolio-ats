import React from "react";
import FooterContainer from "./sections/FooterContainer";
import FooterLogo from "./sections/FooterLogo";
import FooterMenu from "./sections/FooterMenu";
import FooterCopyright from "./sections/FooterCopyright";

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterMenu />
      <FooterCopyright />
    </FooterContainer>
  );
}

export default Footer;
