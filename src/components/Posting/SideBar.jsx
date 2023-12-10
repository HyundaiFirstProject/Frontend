import React, { useState } from "react";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import "assets/CSS/Posts/SideBar.css";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
const SideBar = ({ props }) => {
  const [heart, setHeart] = useState(false);
  return (
    <div id="SideBar">
      <div id="postLikes">
        {props.product === undefined && heart && (
          <PiHeartThin
            className="heart-thin-animation"
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}
        {props.product === undefined && !heart && (
          <PiHeartFill
            className="heart-fill-animation"
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}
        {props.product !== undefined && heart && (
          <PiBookmarkSimpleThin
            className="heart-thin-animation"
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}
        {props.product !== undefined && !heart && (
          <PiBookmarkSimpleFill
            style={{ color: "#1e9d82" }}
            className="heart-fill-animation"
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}
        <p id={!heart ? "checkedHeart" : ""}>{props.likes}</p>
      </div>
      <div id="sideBarComment">
        <TfiComment className="sideBarComment-animation" />
      </div>
    </div>
  );
};
export default SideBar;