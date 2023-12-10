import React from "react";
import ListLayout from "components/List/ListLayout";
import dummy from "assets/dummyForTest/dummy_mainList_long.json";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Paging from "components/Paging/Paging";
import "assets/CSS/List/List.css";
import ScrollToTop from "utils/ScrollToTop";
const ListPets = () => {
  //const page = 12;
  //const url = window.location.href;
  //const currentPage = url.match(/\d+$/)[0];
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="ListContainer">
        <ListLayout props={dummy} />
      </div>
      <div className="ListPaging">
        <Paging props={12} currentPage={9} className="List_paging" />
      </div>
      <Footer />
    </div>
  );
};
export default ListPets;
