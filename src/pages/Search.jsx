import React from "react";
import ListLayout from "components/List/ListLayout";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Paging from "components/Paging/Paging";
import "assets/CSS/List/List.css";
import ScrollToTop from "utils/ScrollToTop";
import { useEffect, useState } from "react";
import useUserInfo from "hooks/LoginHooks/useUserInfo";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const keyword = location.state;
  const [page, setPage] = useState();
  const user = useUserInfo();
  const [list, setList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const getList = async () => {
    try {
      let mergedList = []; // 빈 배열로 초기화
      console.log(keyword);
      const res = await axios.get(`/api/bestPetsBoardSearch`, {
        params: { content: keyword },
      });
      console.log(res);
      if (res.status === 200) {
        mergedList = [...mergedList, ...res.data]; // 데이터 추가
        const res2 = await axios.get(`/api/bestReviewsBoardSearch`, {
          params: { keyword: keyword },
        });
        if (res2.status === 200) {
          mergedList = [...mergedList, ...res2.data];
        }
      }

      setList(mergedList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (list === null) return null;
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="ListContainer">
        {list !== undefined && (
          <ListLayout
            props={list.slice((currentPage - 1) * 12, currentPage * 12)}
            state="pets"
          />
        )}
      </div>
      <div className="ListPaging">
        <Paging
          props={page}
          currentPage={currentPage}
          className="List_paging"
          onMove={(dir) => {
            setCurrentPage((prev) => {
              const nextPage = prev + dir;
              return nextPage < 1 ? 1 : nextPage > page ? page : nextPage;
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Search;
