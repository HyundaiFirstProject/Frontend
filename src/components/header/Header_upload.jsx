import { useNavigate } from "react-router-dom";
import "assets/CSS/Header.css";
import Logo from "assets/images/Logo.png";
import serverURL from "store/Server/ServerURL";
import React from "react";
import usePost from "hooks/axiosWithCredentials/usePost";
const Header_upload = ({ props, img }) => {
  const navigate = useNavigate();
  const { postWithCredentials } = usePost();
  const url = serverURL();
  const bodyData = {
    ...props,
    imgUrlList: img,
  };
  const postDataWithBody = async () => {
    //console.log(bodyData)
    try {
      const res = await postWithCredentials(
        `${url}/api/bestPetsPost/`,
        bodyData
      );
      console.log(res);
    } catch (error) {
      // 에러 처리
    }
  };
  return (
    <div className="header_up">
      <div className="Logo_Header">
        <button onClick={() => navigate("/")}>
          <img src={Logo} alt="로고" className="LogoIMG" />
        </button>
      </div>
      <button
        className="toUpload"
        onClick={postDataWithBody}
        disabled={
          props.title === "" ||
          props.content === "" ||
          props.type === "" ||
          img.length === 0
            ? true
            : false
        }
      >
        올리기
      </button>
    </div>
  );
};
export default Header_upload;