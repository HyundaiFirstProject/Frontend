import ListMap from "components/Posting/ListMap";
//import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Posts = () => {
  const { postID } = useParams();
  const navigate = useNavigate();
  const postInfo = {
    id: 13,
    title: "제목",
    content: "내용~~~",
    img: [
      "https://img.allurekorea.com/allure/2023/08/style_64d0bb3f18816-525x700.jpg",
      "https://cdn.jejusori.net/news/photo/202210/408666_414268_125.jpg",
      "https://img.allurekorea.com/allure/2023/08/style_64d0b9fd307d8-525x700.jpg",
    ],
    date: "2023-12-01-18-57",
    type: "고양이",
    view: 20,
  };
  // const [postInfo, setPostInfo] = useState({
  //   id: 13,
  //   title: "제목",
  //   content: "내용~~~",
  //   img: ["url", "url"],
  //   date: "2023-12-01-18-57",
  //   type: "고양이",
  //   view: 20,
  // });
  const status = postInfo.product === undefined ? "list-pets" : "list-review";

  return (
    <div>
      <ListMap props={postInfo.img} />
      <div>{postInfo.type}</div>
      <div>{postInfo.title}</div>
      <div>{postInfo.content}</div>
      <div>{postInfo.date}</div>
      <div>{postInfo.view}</div>
      <button
        onClick={(e) => {
          navigate(`/upload/${status}/${postID}`, { state: { postInfo } });
        }}
      ></button>
    </div>
  );
};
export default Posts;
