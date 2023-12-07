import usePost from "hooks/axiosWithCredentials/usePost";
import serverURL from "store/Server/ServerURL";
const EmailSend = (email, randNum) => {
  const { postWithCredentials } = usePost();
  const url = serverURL();
  const emailSendBody = { email: email, emailNum: parseInt(randNum) };
  console.log(emailSendBody);
  //return true;
  const emailSend = async () => {
    console.log(`${url}/api/sendEmail`, emailSendBody);
    try {
      const res = await postWithCredentials(
        `${url}/api/sendEmail/`,
        emailSendBody
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
