//import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "assets/CSS/Header.css";
import { jwtDecode } from "jwt-decode";
import useGet from "hooks/axiosWithCredentials/useGet";
const NotFound = () => {
  // const navigate = useNavigate();

  const { getWithCredentials } = useGet();

  const fetchDataWithParams = async () => {
    try {
      const res = await getWithCredentials("api/bestPetsBoard"); //매개변수 O
      console.log(res); // 응답 데이터 사용
    } catch (error) {
      // 에러 처리
    }
  };
  return (
    <div>
      <img
        src="https://pet-e-2023.s3.ap-northeast-2.amazonaws.com/fca9d7a4-381c-4880-a58f-d9ca0f0754aetestScreen.png"
        alt="서버 이미지"
      />
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          const token = jwtDecode(credentialResponse.credential);
          console.dir(token.email);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      ></GoogleLogin>
      <button onClick={fetchDataWithParams}>dddd</button>
    </div>
  );
};
export default NotFound;
