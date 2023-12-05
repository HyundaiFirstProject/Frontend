import { useNavigate } from "react-router-dom";
import "assets/CSS/Header.css";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import UserIMG from "components/userIMG.js";
import React, { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const seachClick = () => {
    console.log("검색");
  };

  const user = {
    no: 1,
    //img_url: "false",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  };
  const isLog = true;

  return (
    <div className="header">
      <div className="Logo_Header">
        <button onClick={() => navigate("/")}>프로젝트</button>
      </div>
      <button className="toList" onClick={() => navigate("/list-review/1")}>
        리뷰게시판
      </button>
      <button className="toList" onClick={() => navigate("/list-pets/1")}>
        자랑게시판
      </button>
      <div>
        <label className="SearchLabel">
          <button onClick={seachClick}>
            <IoIosSearch className="searchIcon" />
          </button>
          <input
            placeholder="통합검색"
            onKeyPress={(e) => {
              e.key === "Enter" && seachClick(); //엔터키 검색 등록
            }}
          />
        </label>
      </div>
      {isLog && (
        <div className="WhenLogIn">
          <button onClick={() => navigate("/mypage")}>
            <UserIMG props={user} className="userIcon" />
          </button>
          <div className="writeBTNcontainer">
            <button
              className="writeBTN"
              onClick={() => {
                toggleDropdown();
              }}
            >
              글쓰기
              <FaAngleDown />
            </button>
            <div
              className={
                showDropdown ? "dropdown-content" : "dropdown-invisible"
              }
            >
              <button>🐾후기 게시판</button>
              <button>자랑 게시판</button>
            </div>
          </div>
        </div>
      )}
      {!isLog && (
        <div>
          <button onClick={() => navigate("/login")}>로그인</button>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
      )}
    </div>
  );
};
export default Header;
