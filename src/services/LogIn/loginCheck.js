import axios from "axios";

export const isLoged = async (e) => {
  e.preventDefault();
  await axios
    .post("api/login", {
      withCredentials: true, // 로그인
    })
    .then((response) => {
      console.log(response);
    });
};
