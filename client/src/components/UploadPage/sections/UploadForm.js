import React from "react";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import UploadSelect from "./UploadSelect";
import Input from "../../utils/Input";
import Button from "../../utils/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 50px;
  & > *:nth-child(1) {
    align-self: center;
    margin-bottom: 60px;
  }
`;

function UploadForm({
  sf,
  rf,
  cf,
  title,
  singer,
  genre,
  review,
  hashtag,
  score,
  genreData,
}) {
  return (
    <StyledForm onSubmit={sf}>
      <FileUpload onRefresh={rf} />
      <Input
        placeholder="곡명"
        width="50vw"
        name="title"
        value={title}
        onChange={cf}
      />
      <Input
        placeholder="가수명"
        width="50vw"
        name="singer"
        value={singer}
        onChange={cf}
      />
      <UploadSelect genre={genre} cf={cf} genreData={genreData} />
      <Input
        placeholder="리뷰"
        width="70vw"
        name="review"
        value={review}
        onChange={cf}
      />
      <Input
        placeholder="평점 / 5.0"
        width="165px"
        name="score"
        value={score}
        onChange={cf}
      />
      <Input
        placeholder="#해시태그"
        width="165px"
        name="hashtag"
        value={hashtag}
        onChange={cf}
      />
      <Button>등록</Button>
    </StyledForm>
  );
}

export default UploadForm;
