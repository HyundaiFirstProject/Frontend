import "assets/CSS/List/ListItem.css";
import UserIMG from "components/userIMG.js";
import truncateText from "utils/truncateText.js";
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
const ListItem = ({ props }) => {
  const user = {
    no: 1,
    nickname: "닉네임",
    user_like_pets_num: 0,
    user_like_review_num: 0,
    //img_url: "false",
    img_url:
      "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
  };
  return (
    <div className="ListItem">
      {props.product !== undefined && (
        <div className="productList">
          <img src={props.productIMG} alt="" />
          <p>{props.product}</p>
        </div>
      )}
      <div className="ListItemIMG_Container">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="List_title">
        <p className="subList_Title">{props.type}</p>
        <p>{truncateText(props.title, 17)}</p>
      </div>
      <div className="List_user_writer">
        <UserIMG props={user} className="userimg_List" />
        <p>{props.writer}</p>
      </div>
      <div className="List_watch_likes">
        <GoHeart />
        <p>{props.likes}</p>
        <FaRegEye />
        <p>{props.watch}</p>
      </div>
    </div>
  );
};
export default ListItem;
