import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import useInputs from "../../hooks/useInputs";
import PageContainer from "../utils/PageContainer";
import UploadForm from "./sections/UploadForm";

const genreData = [
  { id: 1, name: "발라드" },
  { id: 2, name: "R&B" },
  { id: 3, name: "힙합" },
  { id: 4, name: "댄스" },
];

const initialFormState = {
  title: "",
  singer: "",
  genre: "",
  review: "",
  score: "",
  hashtag: "",
};

function UploadPage(props) {
  const [inputs, onChange] = useInputs(initialFormState);
  const { title, singer, genre, review, score, hashtag } = inputs;
  const [image, setImage] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !singer || !genre || !review || !score || !hashtag) {
      return alert("모든 항목을 입력해주세요.");
    }

    const genreNumFunc = (genre) => {
      switch (genre) {
        case "발라드":
          return Number(1);
        case "R&B":
          return Number(2);
        case "힙합":
          return Number(3);
        case "댄스":
          return Number(4);
        default:
          return Number(0);
      }
    };

    let genreNum = genreNumFunc(genre);

    const body = {
      writer: props.user.userData._id,
      title,
      singer,
      review,
      image,
      genre,
      genreNum,
      score,
      hashtag,
    };

    axios.post("/api/review/write", body).then((response) => {
      if (response.data.success) {
        alert("리뷰를 저장했습니다.");
        props.history.push("/");
      } else {
        alert("리뷰 저장에 실패했습니다.");
      }
    });
  };

  const onRefresh = (newImage) => {
    setImage([...image, newImage]);
  };

  return (
    <PageContainer>
      <UploadForm
        sf={onSubmitHandler}
        rf={onRefresh}
        cf={onChange}
        title={title}
        singer={singer}
        genre={genre}
        genreData={genreData}
        review={review}
        hashtag={hashtag}
        score={score}
      />
    </PageContainer>
  );
}

export default withRouter(UploadPage);
