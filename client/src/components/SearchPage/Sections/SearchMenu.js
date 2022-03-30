import React from "react";
import styled from "styled-components";
import { genre } from "./data";
import Checkbox from "./Checkbox";
import Search from "./Search";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

function SearchMenu({ rsf, rcf, keyword }) {
  return (
    <StyledMenu>
      <Checkbox genre={genre} refresh={(checked) => rcf(checked, "genreNum")} />
      <Search refresh={rsf} value={keyword} />
    </StyledMenu>
  );
}

export default SearchMenu;
