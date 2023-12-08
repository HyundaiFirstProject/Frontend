import { useNavigate } from "react-router-dom";
import "assets/CSS/Logo.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      존재하지 않는 페이지입니다!
      <button onClick={() => navigate("/")}>메인페이지로 이동</button>
      <div className="asd"></div>
      <div className="Logo">
        <div className="MainLogo">
          <div className="MainLogo1">P</div>
          <div className="MainLogo2">&</div>
          <div className="MainLogo2">E</div>
          <div className="MainLogo1">T</div>
        </div>
        <div className="SUBLogo">
          <p>njoy</p>
          <p>xperience</p>
          <p>ntertainment</p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
