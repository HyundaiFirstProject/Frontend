import React from "react";
import Banner from "components/Main/Banner.js";
import MainList from "components/Main/MainList.js";
import dummy from "assets/dummyForTest/dummy_main.json";
import dummy2 from "assets/dummyForTest/dummy_mainList.json";
import Header from "components/header/Header.js";
import Footer from "components/footer/Footer.js";
import "assets/CSS/Main/Main.css";
//import { useNavigate } from "react-router-dom";

const Main = () => {
  //const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="MainContainer">
        <div className="mainBanner">
          <div className="mainPics">
            <a
              href="https://www.thehyundai.com/front/dpo/hdSearch.thd?searchtype=&searchQuery=%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4"
              target="_blank" // 링크가 새 탭에서 열리도록 설정
              rel="noopener noreferrer" // 보안 및 브라우저 호환성을 위해 권장되는 속성
            >
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advice/170048641393594961.jpg?w=1275&h=764.6989374262101&c=c"
                alt=""
              />
              <p>🎄반려동물과 행복한 크리스마스🎄</p>
              <p className="smaller_p">현대백화점과 함께하는 X-MAS</p>
            </a>
          </div>
          <div className="mainBannerComp">
            <Banner props={dummy.item} />
          </div>
        </div>
        <div className="mainList">
          <div className="mainTag">
            <p>이런 후기 찾고 있나요?</p>
            <p className="smallP">다른 집사님들의 선택!</p>
            <button>더보기</button>
          </div>
          <MainList props={dummy2.item} />
        </div>
        <div className="mainList">
          <div className="mainTag">
            <p>귀여운 반려동물과의 삶💖</p>
            <button className="moreButton">더보기</button>
          </div>
          <MainList props={dummy2.item} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Main;
