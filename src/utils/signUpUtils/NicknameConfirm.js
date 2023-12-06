import usePost from "hooks/axiosWithCredentials/usePost";
import serverURL from "store/Server/ServerURL";
const NicknameConfirm = (props) => {
  const { postWithCredentials } = usePost();
  const url = serverURL();
  if (props === "") {
    console.log("사용하실 수 없는 닉네임입니다");
    return false;
  }
  const userNickname = { nickname: props };
  //return true;
  const nicknameCheck = async () => {
    console.log(`${url}/api/checkNickname/`, userNickname);
    try {
      const res = await postWithCredentials(
        `${url}/api/checkNickname/`,
        userNickname
      );
      console.log(res); // 응답 데이터 사용
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  nicknameCheck();
};
export default NicknameConfirm;
