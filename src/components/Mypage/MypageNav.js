import React, { useState } from "react";
import "assets/CSS/Mypage/Mypage.css";
import dummy from "assets/dummyForTest/dummy_mainList_long.json";
import dummy_short from "assets/dummyForTest/dummy_mainList.json";
import MyPageList from "./MyPageList.js";
const MypageNavBar = () => {
  const [mypageState, setMypageState] = useState("first");
  return (
    <div className="Mypage_Right">
      <div className="Right_Div_nav">
        <button
          onClick={() => setMypageState("first")}
          className={mypageState === "first" ? "activeButton" : ""}
        >
          자랑게시판
        </button>
        <button
          onClick={() => setMypageState("second")}
          className={mypageState === "second" ? "activeButton" : ""}
        >
          후기게시판
        </button>
        <button
          onClick={() => setMypageState("third")}
          className={mypageState === "third" ? "activeButton" : ""}
        >
          좋아요
        </button>
        <button
          onClick={() => setMypageState("fourth")}
          className={mypageState === "fourth" ? "activeButton" : ""}
        >
          스크랩
        </button>
      </div>
      {mypageState === "first" && <MyPageList props={dummy} />}
      {mypageState === "second" && <MyPageList props={dummy_short} />}
      {mypageState === "third" && <MyPageList props={dummy} />}
      {mypageState === "fourth" && <MyPageList props={dummy_short} />}
    </div>
  );
};
export default MypageNavBar;
