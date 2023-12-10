import usePost from "hooks/axiosWithCredentials/usePost";
const EmailSend = async (email, randNum) => {
  const { postWithCredentials } = usePost();
  const emailSendBody = { email: email, randNum: parseInt(randNum) };

  try {
    const res = await postWithCredentials(`/api/sendEmail`, emailSendBody);
    //console.log(res.status); // 응답 데이터 사용
    if (res.status === "200") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default EmailSend;
