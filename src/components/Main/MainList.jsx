import React from "react";
import "assets/CSS/Main/MainList.css";
//import { GoHeartFill } from "react-icons/go";
import truncateText from "utils/truncateText";
import { IoHeart } from "react-icons/io5";
import { PiBookmarkSimpleFill } from "react-icons/pi";
const MainList = ({ props }) => {
  return (
    <div className="list-container">
      {props.map((item, index) => (
        <button className="listItem" key={index}>
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="item_info">
            {item.product === undefined && (
              <p className="item_subtitle">
                {item.type === "cat" && <p> 🐱고양이 </p>}
                {item.type === "dog" && <p>🐶강아지 </p>}
                {item.type === "bird" && <p>🐥새 </p>}
                {item.type === "fish" && <p> 🐟물고기 </p>}
                {item.type === "설치류" && <p> 🐹설치·토끼류 </p>}
                {item.type === "파충류/양서류" && <p>🦖파충류·양서류 </p>}
                {item.type === "기타" && <p>🐉기타동물 </p>}
              </p>
            )}
            {item.product !== undefined && (
              <p className="item_subtitle">⭐️{item.star}</p>
            )}
            <p className="item_title">{truncateText(item.title, 20)}</p>
            <div className="item_like">
              {item.product === undefined && <IoHeart className="heart" />}
              {item.product !== undefined && (
                <PiBookmarkSimpleFill className="heart" />
              )}
              <div className="number_liked">{/* <p>{item.likes}</p> */}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MainList;
