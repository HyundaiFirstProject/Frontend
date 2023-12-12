import "assets/CSS/List/ListItem.css";
import UserIMG from "components/UserProfile/userIMG";
import truncateText from "utils/truncateText.js";
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { PiBookmarkSimpleThin } from "react-icons/pi";
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
        {props.product === undefined && (
          <div className="subList_Title">
            {props.type === "cat" && <p> 🐱고양이 </p>}
            {props.type === "dog" && <p>🐶강아지 </p>}
            {props.type === "bird" && <p>🐥새 </p>}
            {props.type === "fish" && <p> 🐟물고기 </p>}
            {props.type === "설치류" && <p> 🐹설치·토끼류 </p>}
            {props.type === "파충류/양서류" && <p>🦖파충류·양서류 </p>}
            {props.type === "기타" && <p>🐉기타동물 </p>}
          </div>
        )}
        {props.product !== undefined && (
          <p className="subList_Title_star">
            <p>⭐️{props.star}</p>
          </p>
        )}
        <p className="title">{truncateText(props.title, 17)}</p>
      </div>
      <div className="List_user_writer">
        <UserIMG props={user} className="userimg_List" />
        <p>{props.writer}</p>
      </div>
      <div className="List_watch_likes">
        {props.product === undefined && <GoHeart />}
        {props.product !== undefined && <PiBookmarkSimpleThin />}

        <p>{props.likes}</p>
        <FaRegEye />
        <p>{props.watch}</p>
      </div>
    </div>
  );
};
export default ListItem;
