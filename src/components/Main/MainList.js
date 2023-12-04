import React from "react";
import "assets/CSS/Main/MainList.css";
//import { GoHeartFill } from "react-icons/go";
import truncateText from "utils/truncateText.js";
import { IoHeart } from "react-icons/io5";
const MainList = ({ props }) => {
  return (
    <div className="list-container">
      {props.map((item, index) => (
        <button className="listItem" key={index}>
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="item_info">
            <p className="item_subtitle">{item.type}</p>
            <p className="item_title">{truncateText(item.title, 20)}</p>
            <div className="item_like">
              <IoHeart className="heart" />
              <div className="number_liked">{/* <p>{item.likes}</p> */}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MainList;
