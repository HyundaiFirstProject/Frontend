import { useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import HeaderUpload from "components/header/Header_upload";
import ListMap from "components/Posting/ListMap";
import TypeRadio from "components/Posting/TypeRadio";
import MainImg from "components/Posting/MainImg";
import uploadImages from "utils/imgUtil/uploadImages";
import { BiSolidImageAdd } from "react-icons/bi";
import "assets/CSS/Upload/Upload.css";
import AlertModal from "components/Modal/AlertModal";
import ItemInfo from "components/Posting/ItemInfo";
const Upload = () => {
  window.scrollTo({ top: 0, behavior: "auto" });
  const location = useLocation();
  const [modal, setModal] = useState("close");

  const imgRef_up = useRef(null);
  const [imgList, setImgList] = useState([]);
  const [postInfo, setPostInfo] = useState({
    id: 0,
    title: "",
    content: "",
    type: "",
  });

  useEffect(() => {
    //수정일 때
    if (
      location.state !== "upload-review" &&
      location.state !== "upload-pets"
    ) {
      setPostInfo((prev) => ({
        ...prev,
        id: location.state.postInfo.id,
        title: location.state.postInfo.title,
        content: location.state.postInfo.content,
      }));
      setImgList(location.state.postInfo.img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleIconClick = () => {
    if (imgRef_up.current) {
      imgRef_up.current.click(); // 파일 인풋 클릭
      imgRef_up.current.focus(); // 파일 인풋에 포커스
    }
  };
  const handleImageUpload = () => {
    const tmpfiles = imgRef_up.current.files;
    if (tmpfiles.length > 5 || imgList.length + tmpfiles.length > 5) {
      setModal("open");
    } else uploadImages(tmpfiles, imgList, setImgList);
  };
  const deleteIMG = (index) => {
    const updatedList = [...imgList];
    updatedList.splice(index, 1); // 해당 인덱스 요소 삭제
    setImgList(updatedList);
    document.getElementById("fileInput").value = ""; //삭제한 이미지 재 업로드 가능하도록 브라우저의 보안 정책 우회
  };
  const setValue = (value, target) => {
    setPostInfo((prev) => ({ ...prev, [target]: value }));
  };
  return (
    <div>
      <HeaderUpload props={postInfo} img={imgList} />
      <div
        className="Upload"
        style={{
          height: `${550 + postInfo.content.split("\n").length * 20}px`,
        }}
      >
        <label className="title_input_label" htmlFor="title">
          <input
            className="title_input"
            type="text"
            placeholder="제목"
            value={postInfo.title}
            onChange={(e) => setValue(e.target.value, "title")}
          />
        </label>

        <div className="UploadContainer">
          {location.state === "upload-review" && <ItemInfo />}
          {location.state === "upload-pets" && (
            <TypeRadio
              TypeCheck={(selectedType) => setValue(selectedType, "type")}
            />
          )}
          <div className="imageSection">
            <MainImg props={imgList} onCallClick={handleIconClick} />
            <div
              className={
                imgList.length === 0 ? "setRefandVisible" : "uploadImgList"
              }
            >
              <label className="img_input_label" htmlFor="img">
                <BiSolidImageAdd
                  className="uploadImgIcon"
                  onClick={handleIconClick}
                />
                <input
                  id="fileInput"
                  className="img_input"
                  ref={imgRef_up}
                  type="file"
                  multiple
                  accept=".jpg, .jpeg, .png, .gif, .bmp, .webp, .svg"
                  onChange={handleImageUpload}
                />
              </label>
              <div className="ListMap_div">
                <ListMap props={imgList} onDelete={deleteIMG} />
              </div>
            </div>
          </div>
          <label htmlFor="content">
            <textarea
              placeholder="본문을 자유롭게 적어주세요"
              className="content"
              value={postInfo.content}
              style={{
                height: `${50 + postInfo.content.split("\n").length * 20}px`,
              }}
              onChange={(e) =>
                setValue(e.target.value.replace(/\\n/g, "\n"), "content")
              }
            />
          </label>
        </div>
      </div>
      {modal !== "close" && (
        <AlertModal
          alertString={"사진은 최대 5개까지 가능합니다."}
          onClose={() => setModal("close")}
        />
      )}
    </div>
  );
};
export default Upload;

/*
// 나중에 출력할 때 줄 바꿈을 적용하고 싶을 때
return <div>{text.split("\n").map((line, index) => <div key={index}>{line}</div>)}</div>;
*/
