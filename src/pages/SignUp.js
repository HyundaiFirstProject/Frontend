import "assets/CSS/Login.css";
import React, { useEffect, useState, useRef } from "react";
import serverURL from "store/Server/ServerURL";
import { useNavigate } from "react-router-dom";
import usePost from "hooks/axiosWithCredentials/usePost";
import InputCSS from "components/SignUp/InputCSS";
import emailCheck from "utils/signUpUtils/emailCheck";
import pwConfirm from "utils/signUpUtils/pwConfirm";
import NicknameConfirm from "utils/signUpUtils/NicknameConfirm";
import EmailConfirm from "utils/signUpUtils/EmailConfirm";
import EmailSend from "utils/signUpUtils/EmailSend";
const SignUp = () => {
  const navigate = useNavigate();
  const { postWithCredentials } = usePost();
  const url = serverURL();
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    password: "",
  });
  const [confirmPW, setConfirmPW] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [emailAutho, setEmailAutho] = useState("");
  const [status, setStatus] = useState({
    nickname: false,
    nickname_try_checked: false,
    email: false,
    email_try_checked: false,
    email_btn_checked: false,
    password: false,
    password_confirm: false,
    password_confirm_try_checked: false,
    emailAutho: false,
  });
  const nicknameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const emailCheckInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmInputRef = useRef(null);

  useEffect(() => {
    localStorage.clear();
  }, []); //회원가입 페이지 들어오면 로그인 무조건 해제

  const handleNicknameConfirm = (e) => {
    e.preventDefault();
    const nicknamePossible = NicknameConfirm(userInfo.nickname);
    setStatus((pre) => ({
      ...pre,
      nickname_try_checked: true,
      nickname: nicknamePossible,
    }));
  };
  const handleEmailConfirm = (e) => {
    e.preventDefault();
    if (status.emailAutho === false) {
      const isNotDup = EmailConfirm(userInfo.email);
      if (isNotDup) {
        setSendEmail(true);
      }
      setStatus((prev) => ({ ...prev, email_btn_checked: true }));
    } else {
      console.log("이미 인증을 완료한 이메일입니다.");
      //모달창 띄우기
    }
  };

  const handleEmailAuthoConfirm = (e) => {
    e.preventDefault();
    const emailAuthoStatus = EmailSend(userInfo.email);
    if (emailAuthoStatus) setStatus((prev) => ({ ...prev, emailAutho: true }));
    console.log(emailAuthoStatus, status.emailAutho);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trySignUp();
  };

  const trySignUp = async () => {
    console.log(`${url}/api/signup/`, userInfo, confirmPW);
    try {
      const res = await postWithCredentials(`${url}/api/signup/`, userInfo);
      console.log(res); // 응답 데이터 사용
      if (res.status === 200) {
        //회원가입이 완료되었습니다 모달창
        navigate("/login");
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
      <div className="LogIn_Name_su">프로젝트 네임</div>
      <form className="input_SU" onSubmit={handleSubmit}>
        {status.nickname === true && status.nickname_try_checked === true && (
          <p className="alertWrong">사용 가능한 닉네임입니다.</p>
        )}
        {status.nickname === false && status.nickname_try_checked === true && (
          <p className="alertWrong">사용 불가한 닉네임입니다.</p>
        )}
        <InputCSS
          name="닉네임"
          tag="name"
          type="text"
          ref={nicknameInputRef}
          value={userInfo.nickname}
          disabled={
            status.nickname === true && status.nickname_try_checked === true
              ? true
              : false
          }
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, nickname: e.target.value }));
          }}
        />
        <button className="confirmBTN" onClick={handleNicknameConfirm}>
          확인
        </button>
        {status.email === false && status.email_try_checked === true && (
          <p className="alertWrong">이메일 형식이 올바르지 않습니다.</p>
        )}
        {sendEmail === true && (
          <p className="alertWrong">사용 가능한 이메일입니다.</p>
        )}
        {sendEmail === false && status.email_btn_checked === true && (
          <p className="alertWrong">사용 불가능한 이메일입니다.</p>
        )}
        <InputCSS
          name="이메일"
          tag="email"
          type="text"
          ref={emailInputRef}
          value={userInfo.email}
          disabled={sendEmail ? true : false}
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, email: e.target.value }));
            setStatus((pre) => ({
              ...pre,
              email_btn_checked: false,
              email_try_checked: true,
              email: emailCheck(e.target.value),
            }));
          }}
        />
        <button
          disabled={
            status.email === true && status.email_try_checked === true
              ? false
              : true
          }
          className={
            status.email === true && status.email_try_checked === true
              ? "confirmBTN_email"
              : "confirmBTN_email_dis"
          }
          onClick={handleEmailConfirm}
        >
          확인
        </button>
        {status.emailAutho === true && (
          <p className="alertWrong">인증되었습니다</p>
        )}
        <InputCSS
          name="이메일 인증"
          tag="emailCheck"
          type="text"
          ref={emailCheckInputRef}
          value={emailAutho}
          disabled={status.emailAutho ? true : false}
          onChange={(e) => {
            setEmailAutho(e.target.value);
          }}
        />
        <button
          disabled={sendEmail ? false : true}
          className={
            sendEmail === true
              ? "confirmBTN_email_autho"
              : "confirmBTN_email_dis_autho"
          }
          onClick={handleEmailAuthoConfirm}
        >
          확인
        </button>

        <InputCSS
          name="비밀번호"
          tag="PW"
          type="password"
          ref={passwordInputRef}
          value={userInfo.password}
          disabled={false}
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, password: e.target.value }));
            setStatus((pre) => ({ ...pre, password: true }));
          }}
        />
        {status.password_confirm === false &&
          status.password_confirm_try_checked === true && (
            <p className="alertWrong">비밀번호와 일치하지 않습니다</p>
          )}
        <InputCSS
          name="비밀번호 확인"
          tag="PW_confirm"
          type="password"
          ref={passwordConfirmInputRef}
          value={confirmPW}
          disabled={false}
          onChange={(e) => {
            setConfirmPW(e.target.value);
            setStatus((pre) => ({
              ...pre,
              password_confirm: pwConfirm(userInfo.password, e.target.value),
              password_confirm_try_checked: true,
            }));
          }}
        />
        <button
          className="LogInBTN"
          disabled={Object.values(status).includes(false) ? true : false}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};
export default React.memo(SignUp);
