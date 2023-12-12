import { /*useLocation*/ useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
//import useGet from "hooks/axiosWithCredentials/useGet";
import "assets/CSS/Mypage/ProfileUpload.css";
import UserIMG from "components/UserProfile/userIMG";
import NicknameConfirm from "utils/signUpUtils/NicknameConfirm";
import { BiImageAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import ScrollToTop from "utils/ScrollToTop";
const ProfileUpload = () => {
  //const location = useLocation();
  const navigate = useNavigate();
  const [nicknamePossible, setNickNamePossible] = useState("before");
  const [user, setUser] = useState({
    user_no: 101,
    email: "user1@example.com",
    password: "password1",
    nickname: "User1",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  });
  const beforeNicknameRef = useRef(user.nickname);
  const imgRef_up = useRef(null);
  //const { getWithCredentials } = useGet();
  useEffect(() => {
    beforeNicknameRef.current = user.nickname;
    // const useNo = location.state;
    // const params = { user_no: useNo };
    // const fetchDataWithParams = async () => {
    //   try {
    //     const res = await getWithCredentials(`/api/getUserInfo`, params); //매개변수 O
    //     console.log(res); // 응답 데이터 사용
    //beforeNicknameRef.current = res.data.nickname;
    //   } catch (error) {
    //     // 에러 처리
    //   }
    // };
    // fetchDataWithParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleIconClick = () => {
    if (imgRef_up.current) {
      imgRef_up.current.click(); // 파일 인풋 클릭
      imgRef_up.current.focus(); // 파일 인풋에 포커스
    }
  };
  const deleteIMG = () => {
    setUser((pre) => ({ ...pre, img_url: "false" }));
  };
  const handleNicknameConfirm = async (e) => {
    e.preventDefault();
    try {
      const nicknamePossible = await NicknameConfirm(user.nickname);
      setNickNamePossible(nicknamePossible);
      if (!nicknamePossible) {
        //안된다는 모달창
        setUser((pre) => ({ ...pre, nickname: "" }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const imgUpload = async (event) => {
    const file = imgRef_up.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUser((pre) => ({ ...pre, img_url: reader.result }));
    };
  };
  const MypageUploadSubmit = () => {};
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div id="ProfileUpload">
        <p id="ProfileUpload_title">회원정보수정</p>
        <button
          id="deleteUser"
          onClick={() => {
            navigate(`/withdrawal/${user.user_no}`, { state: user.email });
          }}
        >
          탈퇴하기
        </button>
        <div id="userInfo_Div">
          <p>이메일</p>
          <div>{user.email}</div>
        </div>
        <div id="userInfo_Div">
          {user.nickname.length === 10 && (
            <p id="alert_nick">닉네임은 최대 10글자입니다.</p>
          )}
          <p>닉네임</p>
          <input
            value={user.nickname}
            placeholder={
              user.nickname.length === 0 ? "닉네임은 최소 1글자입니다." : ""
            }
            onChange={(e) => {
              if (e.target.value.length <= 10)
                setUser((pre) => ({ ...pre, nickname: e.target.value }));
            }}
          />
          <button
            id="nickCheck_my"
            onClick={handleNicknameConfirm}
            disabled={
              user.nickname.length === 0 ||
              beforeNicknameRef.current === user.nickname
                ? true
                : false
            }
          >
            확인
          </button>
        </div>
        <div id="userInfo_Div_img">
          <p>프로필 이미지</p>
          <UserIMG props={user} className="userimg_myPage_upload" />

          <div>
            <label className="img_input_label_mypage" htmlFor="img">
              <button className="profile_input" onClick={deleteIMG}>
                <MdDeleteForever />
                <div>삭제</div>
              </button>
              <button className="profile_input2" onClick={handleIconClick}>
                <BiImageAdd />
              </button>
              <input
                id="fileInput"
                className="profile_input_input"
                ref={imgRef_up}
                type="file"
                accept=".jpg, .jpeg, .png, .gif, .bmp, .webp, .svg"
                onChange={imgUpload}
              />
            </label>
          </div>
        </div>
        <button
          id="submitButton"
          onClick={MypageUploadSubmit}
          disabled={
            nicknamePossible === "before" || nicknamePossible === true
              ? false
              : true
          }
        >
          회원 정보 수정
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default ProfileUpload;
