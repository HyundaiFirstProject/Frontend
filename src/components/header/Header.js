import { useNavigate } from "react-router-dom";
import { PiUserCircleLight } from "react-icons/pi";
import "assets/CSS/Header.css";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  const navigate = useNavigate();
  const user = {
    no: 1,
    //img_url: "false",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  };
  const isLog = false;

  const seachClick = () => {
    console.log("검색");
  };

  return (
    <div className="header">
      <div className="Logo_Header">
        <button onClick={() => navigate("/")}>프로젝트명</button>
      </div>
      <button className="toList" onClick={() => navigate("/login")}>
        리뷰게시판
      </button>
      <button className="toList" onClick={() => navigate("/login")}>
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
        <div>
          <button onClick={() => navigate("/mypage")}>
            {user.img_url === "false" && (
              <PiUserCircleLight className="userIcon" />
            )}
            {!(user.img_url === "false") && (
              <img alt="profile" src={user.img_url} className="userimg" />
            )}
          </button>
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
