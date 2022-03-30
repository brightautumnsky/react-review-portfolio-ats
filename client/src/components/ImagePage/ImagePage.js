import React, { useEffect, useState } from "react";
import PageContainer from "../utils/PageContainer";
import ImageContainer from "./sections/ImageContainer";
import Image from "./sections/Image";
import axios from "axios";

function ImagePage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.post("/api/review/get").then((response) => {
      if (response.data.success) {
        const reviewInfo = response.data.reviews;
        setReviews([...reviews, ...reviewInfo]);
      } else {
        console.log(`리뷰 불러오기에 실패했습니다.: ${response.data.err}`);
      }
    });
  }, []);

  return (
    <PageContainer>
      <ImageContainer>
        {reviews.map((review, index) => (
          <Image image={review.image} title={review.title} key={index} />
        ))}
      </ImageContainer>
    </PageContainer>
  );
}

export default ImagePage;
