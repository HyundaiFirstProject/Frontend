import React from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "services/loginFunction";
import { handleLogout } from "services/loginFunction";
const Main = () => {
  const navigate = useNavigate();
  console.log(handleLogin);
  console.log(handleLogout);
  return (
    <div>
      <button onClick={() => navigate("/list")}>리스트 임시 이동 버튼</button>
    </div>
  );
};
export default Main;
