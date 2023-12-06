import usePost from "hooks/axiosWithCredentials/usePost";
import serverURL from "store/Server/ServerURL";
const EmailSend = (props) => {
  const { postWithCredentials } = usePost();
  const url = serverURL();
  const useEmail = { email: props };
  //return true;
  const emailSend = async () => {
    console.log(`${url}/api/emailAuthorization`, useEmail);
    try {
      const res = await postWithCredentials(
        `${url}/api/emailAuthorization/`,
        useEmail
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
  emailSend();
};
export default EmailSend;
