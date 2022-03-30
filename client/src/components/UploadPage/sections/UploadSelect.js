import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 166px;
  height: 32px;
  border-radius: 0px;
  background: transparent;
  border: 2px solid #fafafa;
  &:focus {
    outline: none;
  }
`;

function UploadSelect({ genre, cf, genreData }) {
  return (
    <StyledSelect name="genre" value={genre} onChange={cf}>
      {genreData.map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </StyledSelect>
  );
}

export default UploadSelect;
