import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PageContainer from "../utils/PageContainer";
import Detail from "./Sections/Detail";

function DetailReviewPage(props) {
  const user = useSelector((state) => state.user);
  const id = props.match.params.id;
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/review/review_by_id?id=${id}&type=single`)
      .then((response) => {
        if (response.data.success) {
          const reviewInfo = response.data.review[0];
          setReview(reviewInfo);
          setLoading(false);
        } else {
          alert("리뷰 불러오기에 실패했습니다.");
          setLoading(false);
        }
      });
  }, [id]);

  return (
    <PageContainer>
      {loading ? (
        <span>loading...</span>
      ) : (
        <Detail Reviewinfo={review} user={user} />
      )}
    </PageContainer>
  );
}

export default DetailReviewPage;
