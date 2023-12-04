import axios from "axios";

export const handleLogin = async (e) => {
  e.preventDefault();
  await axios
    .post("api/login", {
      withCredentials: true, // 로그인
    })
    .then((response) => {
      console.log(response);
    });
};

export const handleLogout = async (e) => {
  e.preventDefault();
  await axios
    .post("api/logout", {
      withCredentials: true, //로그아웃
    })
    .then((response) => {
      console.log(response);
    });
};
