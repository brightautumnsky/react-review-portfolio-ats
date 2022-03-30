import React, { useState, useCallback } from "react";
import axios from "axios";
import PageContainer from "../utils/PageContainer";
import ResultContainer from "./Sections/ResultContainer";
import SearchMenu from "./Sections/SearchMenu";
import Result from "./Sections/Result";

function SearchPage() {
  const [reviews, setReviews] = useState([]);
  const [filters, setFilters] = useState({ categoryNum: [] });
  const [keyword, setKeyword] = useState("");

  const getReviews = useCallback((body) => {
    axios.post("api/review/get", body).then((response) => {
      if (response.data.success) {
        setReviews(response.data.reviews);
      } else {
        alert("리뷰 불러오기에 실패했습니다.");
      }
    });
  }, []);

  const onRefreshChecked = (checked, genre) => {
    const newFilters = { ...filters };
    newFilters[genre] = checked;
    let body = {
      filters: newFilters,
    };
    getReviews(body);

    setFilters(newFilters);
  };

  const onRefreshSearch = (search) => {
    let body = {
      filters,
      keyword: search,
    };
    setKeyword(search);
    getReviews(body);
  };

  return (
    <PageContainer>
      <SearchMenu
        rsf={onRefreshSearch}
        rcf={onRefreshChecked}
        keyword={keyword}
      />
      <ResultContainer>
        {reviews.map((review, index) => (
          <a href={`/review/${review._id}`} key={index}>
            <Result
              title={review.title}
              genre={review.genre}
              img={review.image}
            />
          </a>
        ))}
      </ResultContainer>
    </PageContainer>
  );
}

export default SearchPage;
