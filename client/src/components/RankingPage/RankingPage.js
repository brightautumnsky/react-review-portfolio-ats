import React, { useEffect, useState } from "react";
import axios from "axios";
import PageContainer from "../utils/PageContainer";
import RankingContainer from "./sections/RankingContainer";
import Ranking from "./sections/Ranking";

function RankingPage() {
  const [limit] = useState(30);
  const [reviews, setReviews] = useState([]);

  const reviewInfo = reviews.sort((a, b) => {
    return b.score - a.score;
  });

  useEffect(() => {
    let body = {
      limit,
    };

    axios.post("/api/review/get", body).then((response) => {
      if (response.data.success) {
        setReviews(response.data.reviews);
      } else {
        console.log(`리뷰 가져오기에 실패했습니다.: ${response.data.err}`);
      }
    });
  }, []);

  return (
    <PageContainer>
      <RankingContainer>
        <Ranking review={reviewInfo} />
      </RankingContainer>
    </PageContainer>
  );
}

export default RankingPage;
