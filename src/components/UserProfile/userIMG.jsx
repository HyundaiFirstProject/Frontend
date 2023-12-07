//import { PiUserCircleLight } from "react-icons/pi";
import { PiUserCircleThin } from "react-icons/pi";
import "assets/CSS/userIMG.css";
const UserIMG = ({ props, className }) => {
  const userIMGClassName = `${className}_container`;
  return (
    <div className={userIMGClassName}>
      {props.img_url === "false" && <PiUserCircleThin className={className} />}
      {!(props.img_url === "false") && (
        <img alt="profile" src={props.img_url} className={className} />
      )}
    </div>
  );
};
export default UserIMG;
