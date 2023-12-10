import { PiHeartThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import UserIMG from "components/UserProfile/userIMG";
import "assets/CSS/Mypage/Mypage.css";
const InfoBar = () => {
  const user = {
    no: 1,
    nickname: "닉네임",
    user_like_pets_num: 0,
    user_like_review_num: 0,
    //img_url: "false",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  };
  return (
    <div className="Mypage_Left">
      <UserIMG props={user} className="userimg_myPage" />
      <p>{user.nickname}</p>
      <button>설정</button>
      <hr className="HR" />
      <div className="userInfo_Mypage">
        <div className="mypage_infoBar">
          <PiHeartThin className="heart_mypage" />
          <p>좋아요</p>
          <p className="numberOfUser"> {user.user_like_pets_num}</p>
        </div>
        <div className="mypage_infoBar">
          <PiBookmarkSimpleThin className="heart_mypage" />
          <p>스크랩</p>
          <p className="numberOfUser"> {user.user_like_review_num}</p>
        </div>
      </div>
    </div>
  );
};
export default InfoBar;
