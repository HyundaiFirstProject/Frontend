import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoginCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const token = searchParams.get("accesstoken");
    localStorage.setItem("accesstoken", token);
    navigate("/");
  }, [navigate]);
  return null;
};
export default LoginCallback;
