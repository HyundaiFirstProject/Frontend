import "assets/CSS/Login.css";
const SignUp = () => {
  return (
    <div className="container_Login">
      <div className="LogIn_Name_su">프로젝트 네임</div>
      <form className="input_SU">
        <div className="field field_v2">
          <label htmlFor="Id" className="ha-screen-reader">
            닉네임
          </label>
          <input className="field__input" type="text" placeholder="" />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">닉네임</span>
          </span>
        </div>
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
            <span className="field__label">Password</span>
          </span>
        </div>
        <div className="field field_v2">
          <label htmlFor="PW" className="ha-screen-reader">
            비밀번호
          </label>
          <input
            id="PW_confirm"
            className="field__input"
            type="password"
            placeholder=""
            autoComplete="off" //자동완성. 없어도 됨
          />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">비밀번호 확인</span>
          </span>
        </div>
        <button className="LogInBTN">회원가입</button>
      </form>
    </div>
  );
};
export default SignUp;
