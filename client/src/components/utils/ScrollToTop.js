import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 새로고침할 때 스크롤을 상단으로 끌어올리기
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, [pathname]);

  return null;
}
