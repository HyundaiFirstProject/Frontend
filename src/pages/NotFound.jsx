//import { useNavigate } from "react-router-dom";

import { Oval } from "react-loader-spinner";
import "assets/CSS/Header.css";

const NotFound = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Oval
        height={110}
        width={110}
        color="#1e9d82"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1e9d82"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};
export default NotFound;
