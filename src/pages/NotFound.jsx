import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      존재하지 않는 페이지입니다!
      <button onClick={() => navigate("/")}>메인페이지로 이동</button>
    </div>
  );
};
export default NotFound;
