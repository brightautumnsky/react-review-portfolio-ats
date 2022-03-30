import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 12px;
  width: 350px;
  height: 70px;
  border: 3px solid;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    width: 270px;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid;
  width: 170px;
  height: 40px;
  &:focus {
    outline: none;
  }
`;

function Search({ refresh }) {
  const [keyword, setKeyword] = useState("");
  const onSearchHandler = (e) => {
    const currentKeyword = e.target.value;
    setKeyword(currentKeyword);
    refresh(currentKeyword);
  };

  return (
    <StyledSearch>
      <FaSearch style={{ color: "#222" }} onChange={onSearchHandler} />
      <StyledInput
        onChange={onSearchHandler}
        value={keyword}
        placeholder="search"
      />
    </StyledSearch>
  );
}

export default Search;
