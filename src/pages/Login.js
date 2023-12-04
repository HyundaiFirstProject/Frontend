import "assets/CSS/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = new useNavigate();
  return (
    <div className="container_Login">
      <div className="LogIn_Name">프로젝트 네임</div>
      <form className="input_LOG">
        <div className="field field_v2">
          <label htmlFor="Id" className="ha-screen-reader">
            ID
          </label>
          <input className="field__input" type="text" placeholder="" />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">이메일</span>
          </span>
        </div>
        <div className="field field_v2">
          <label htmlFor="PW" className="ha-screen-reader">
            PW
          </label>
          <input
            id="PW"
            className="field__input"
            type="password"
            placeholder=""
            autoComplete="off" //자동완성. 없어도 됨
          />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">비밀번호</span>
          </span>
        </div>
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

export default Login;
