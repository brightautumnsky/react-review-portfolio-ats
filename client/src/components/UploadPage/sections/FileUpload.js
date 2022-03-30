import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import axios from "axios";

const StyledFileUpload = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 24px;
`;

const StyledDropzone = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`;

const ThumbnailImage = styled.div`
  width: 150px;
  height: 150px;
  border: 1px dashed #333;
  overflow: hidden;
  img {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

function FileUpload({ onRefresh }) {
  const [images, setImages] = useState([]);
  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    axios.post("/api/review/image", formData, config).then((response) => {
      if (response.data.success) {
        setImages([...images, response.data.image]);
        onRefresh(response.data.image);
      } else {
        alert("이미지 업로드에 실패했습니다.");
      }
    });
  };

  const onDeleteHandler = () => {
    setImages([]);
  };

  return (
    <StyledFileUpload>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <StyledDropzone {...getRootProps()}>
            <input {...getInputProps()} />+
          </StyledDropzone>
        )}
      </Dropzone>
      <ThumbnailImage>
        {images.map((image, index) => (
          <img
            key={index}
            src={`https://react-review-portfolio-ats.herokuapp.com/${image}`}
            alt="coverImg"
            onClick={onDeleteHandler}
          />
        ))}
      </ThumbnailImage>
    </StyledFileUpload>
  );
}

export default FileUpload;
