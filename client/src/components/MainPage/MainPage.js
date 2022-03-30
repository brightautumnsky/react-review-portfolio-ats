import React, { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import PageContainer from "../utils/PageContainer";
import MusicSection from "./sections/MusicSection";
import MenuSection from "./sections/MenuSection";
import ServiceSection from "./sections/ServiceSection";

function MainPage() {
  const [reviews, setReviews] = useState([]);
  const [skip] = useState(0);
  const [limit] = useState(4);
  const getReviews = useCallback((body) => {
    axios.post("api/review/get", body).then((response) => {
      if (response.data.success) {
        setReviews(response.data.reviews);
      } else {
        alert("리뷰 불러오기를 실패했습니다");
      }
    });
  }, []);

  useEffect(() => {
    let body = {
      skip,
      limit,
    };
    getReviews(body);
  }, [getReviews, limit, skip]);

  return (
    <PageContainer>
      <MenuSection />
      <MusicSection reviews={reviews} />
      <ServiceSection />
    </PageContainer>
  );
}
export default withRouter(MainPage);
