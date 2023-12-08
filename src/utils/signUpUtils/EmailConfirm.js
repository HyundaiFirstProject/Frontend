import usePost from "hooks/axiosWithCredentials/usePost";
const EmailConfirm = (props) => {
  const { postWithCredentials } = usePost();
  const useEmail = { email: props };
  //return true;
  const emailConfirm = async () => {
    console.log(`/api/checkEmail`, useEmail);
    try {
      const res = await postWithCredentials(`/api/checkEmail`, useEmail);
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
  emailConfirm();
};
export default EmailConfirm;
