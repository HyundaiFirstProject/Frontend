import React from "react";
import ListLayout from "components/List/ListLayout";
import dummy from "assets/dummyForTest/dummy_mainList_long.json";
import Header from "components/header/Header.js";
import Footer from "components/footer/Footer.js";
import Paging from "components/Paging/Paging.js";
import "assets/CSS/List/List.css";
const ListPets = () => {
  //const page = 12;
  //const url = window.location.href;
  //const currentPage = url.match(/\d+$/)[0];
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <div>
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
