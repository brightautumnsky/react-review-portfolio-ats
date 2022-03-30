import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import PageContainer from "../utils/PageContainer";
import ReviewContainer from "./Sections/ReviewContainer";
import Review from "./Sections/Review";
import Button from "../utils/Button";

function ExpPage() {
  const [reviews, setReviews] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(4);
  const [postSize, setPostSize] = useState(0);

  const getReviews = useCallback(
    (body) => {
      axios.post("api/review/get", body).then((response) => {
        if (response.data.success) {
          if (body.loadMore) {
            setReviews([...reviews, ...response.data.reviews]);
          } else {
            setReviews(response.data.reviews);
          }
          setPostSize(response.data.postSize);
        } else {
          alert("리뷰 불러오기를 실패했습니다");
        }
      });
    },
    [reviews]
  );

  useEffect(() => {
    let body = {
      skip,
      limit,
    };
    getReviews(body);
  }, []);

  const onLoadMoreHandler = () => {
    let nextSkip = skip + limit;
    let body = {
      skip: nextSkip,
      limit,
      loadMore: true,
    };
    getReviews(body);
    setSkip(nextSkip);
  };

  return (
    <PageContainer>
      <ReviewContainer>
        <Review review={reviews} />
      </ReviewContainer>
      {postSize >= limit && <Button onClick={onLoadMoreHandler}>더보기</Button>}
    </PageContainer>
  );
}

export default ExpPage;
