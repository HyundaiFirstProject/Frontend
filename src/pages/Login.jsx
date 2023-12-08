import "assets/CSS/Login.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import serverURL from "store/Server/ServerURL";
import usePost from "hooks/axiosWithCredentials/usePost";
import InputCSS from "components/SignUp/InputCSS";
const Login = () => {
  const navigate = useNavigate();
  const url = serverURL();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const { postWithCredentials } = usePost();

  useEffect(() => {
    localStorage.clear();
  }, []); //로그인 페이지 들어오면 로그인 무조건 해제
  const handleSubmit = (e) => {
    e.preventDefault();
    tryLogin();
  };

  const tryLogin = async () => {
    console.log(`${url}/api/login/`, userInfo);
    try {
      const res = await postWithCredentials(`${url}/api/login`, userInfo);
      console.log(res); // 응답 데이터 사용
      if (res.status === 200) {
        localStorage.setItem("isLog", true);
        navigate("/");
      } else {
        //모달 창 띄우기
      }
    } catch (error) {
      //모달 창 띄우기
      // 에러 처리
    }
  };

  return (
    <div className="container_Login">
      <div className="LogIn_Name">프로젝트 네임</div>
      <form className="input_LOG" onSubmit={handleSubmit}>
        <InputCSS
          name="이메일"
          tag="email"
          type="text"
          ref={emailInputRef}
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputCSS
          name="비밀번호"
          tag="PW"
          type="password"
          ref={passwordInputRef}
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button className="LogInBTN">로그인</button>
        <div className="bottomBTN">
          <button
            className="goToNewPW"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            비밀번호 재설정
          </button>
          <p>|</p>
          <button
            className="goToSignUp"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
