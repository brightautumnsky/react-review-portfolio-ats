import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  width: 350px;
  height: 70px;
  border: 3px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 24px 0;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    width: 270px;
  }
`;

function Checkbox({ genre, refresh }) {
  const [checked, setChecked] = useState([]);

  const onCheckHandler = (id) => {
    const value = checked.indexOf(id);
    const newChecked = [...checked];

    if (value === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(value, 1);
    }
    setChecked(newChecked);
    refresh(newChecked);
  };

  return (
    <StyledCheckbox>
      {genre.map((review, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checked.indexOf(review._id) === -1 ? false : true}
            onChange={() => onCheckHandler(review._id)}
          />
          <label>{review.name}</label>
        </div>
      ))}
    </StyledCheckbox>
  );
}

export default Checkbox;
