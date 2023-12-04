import { PiUserCircleLight } from "react-icons/pi";
import "assets/CSS/Mypage.css";
import Header from "components/header/Header.js";
import Footer from "components/footer/Footer.js";
const Mypage = () => {
  const user = {
    no: 1,
    nickname: "닉네임",
    //img_url: "false",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  };
  return (
    <div>
      <Header />
      <div className="Mypage">
        <div className="Mypage_Left">
          {user.img_url === "false" && (
            <PiUserCircleLight className="userimg_myPage" />
          )}
          {!(user.img_url === "false") && (
            <img alt="profile" src={user.img_url} className="userimg_myPage" />
          )}
          <p>{user.nickname}</p>
          <button>설정</button>
          <div className="userInfo_Mypage">
            <div>좋아요</div>

            <div>댓글</div>
          </div>
        </div>
        <div className="Mypage_Right">sdfsdf</div>
      </div>
      <Footer />
    </div>
  );
};
export default Mypage;
