import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import "assets/CSS/Upload/Upload_De.css";
const UploadPets = ({ props }) => {
  const location = useLocation();
  const status = location.state;
  const [postInfo, setPostInfo] = useState({
    id: 0,
    title: "",
    content: "",
    imgUrlList: [],
  });
  const imageUrls = []; // 이미지 URL을 저장할 배열

  const handleImageChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    for (let i = 0; i < files.length; i++) {
      const imageUrl = URL.createObjectURL(files[i]);
      imageUrls.push(imageUrl);
    }
    console.log("url", imageUrls);

    // for (const [key, value] of formData.entries()) {
    //   if (value instanceof File) {
    //     console.log(
    //       `File Name: ${value.name}, File Size: ${value.size} bytes, File Type: ${value.type}`
    //     );
    //   }
    // }
  };
  const setValue = (value, target) => {
    setPostInfo((prev) => ({ ...prev, [target]: value }));
  };
  if (status === "modify") setPostInfo(props);
  return (
    <div>
      <Header />
      {imageUrls.map((file, index) => (
        <div className="imgDiv" key={index}>
          {file.type === "image/jpeg" && (
            <img
              className="MarketIMG"
              src={URL.createObjectURL(file)}
              alt="MarketIMG"
            />
          )}
          {file.type !== "사진 XboX 방지용" && (
            <img className="MarketIMG" src={file} alt="MarketIMG" />
          )}
        </div>
      ))}
      <div className="UploadContainer">
        <form>
          <div></div>
          <label htmlFor="img">
            이미지
            <input
              className="title_input"
              type="file"
              multiple
              value={postInfo.imgUrlList}
              onChange={handleImageChange}
            />
          </label>
          <label htmlFor="title">
            제목
            <input
              className="title_input"
              type="text"
              placeholder=""
              value={postInfo.title}
              onChange={(e) => setValue(e.target.value, "title")}
            />
          </label>
          <label htmlFor="content">
            내용
            <textarea
              className="content"
              value={postInfo.content}
              onChange={(e) => setValue(e.target.value, "title")}
            />
          </label>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default UploadPets;
