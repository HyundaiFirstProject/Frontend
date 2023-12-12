import { useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect, useCallback } from "react";
import HeaderUpload from "components/header/Header_upload";
import ListMap from "components/Posting/ListMap";
import TypeRadio from "components/Posting/TypeRadio";
import MainImg from "components/Posting/MainImg";
import uploadImages from "utils/imgUtil/uploadImages";
import { BiSolidImageAdd } from "react-icons/bi";
import "assets/CSS/Upload/Upload.css";
import AlertModal from "components/Modal/AlertModal";
import ItemInfo from "components/Posting/ItemInfo";
import ScrollToTop from "utils/ScrollToTop";
import Rating from "@mui/material/Rating";
import ReactQuill from "react-quill";
//import axios from "axios";

const Upload = () => {
  const location = useLocation();
  const [modal, setModal] = useState("close");
  const imgRef_up = useRef(null);
  const quillRef = useRef();
  const [imgList, setImgList] = useState([]);
  const [postInfo, setPostInfo] = useState({
    id: 0,
    title: "",
    content: "",
    type: "",
    star: 0,
    prod: "",
  });
  const [prevContent, setPrevContent] = useState(postInfo.content);
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      console.log(file);
      // try {
      //   const result = await axios.post("", formData);
      //   console.log("성공 시", result.data.url);
      //   const IMG_URL = result.data.url;
      //   const editor = quillRef.current.getEditor();
      //   const range = editor.getSelection();
      //   editor.insertEmbed(range.index, "image", IMG_URL);
      // } catch (error) {
      //   console.log("실패");
      // }
    });
  }, []);
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline", "italic", "blockquote", "strike"],
        [{ color: [] }],
        [{ background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };
  const handleContentChange = (content) => {
    setPostInfo({ ...postInfo, content }); // 상태 업데이트
  };
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
  useEffect(() => {
    if (prevContent !== postInfo.content) {
      window.scrollTo(0, document.body.scrollHeight);
      setPrevContent(postInfo.content); // 변경된 내용으로 업데이트
    }
  }, [postInfo.content, prevContent]);

  return (
    <div className="Upload">
      <ScrollToTop />
      <HeaderUpload props={postInfo} img={imgList} />
      <div>
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
          {location.state === "upload-review" && (
            <ItemInfo
              onCheck={(prod) =>
                setPostInfo((prev) => ({
                  ...prev,
                  prod: prod,
                }))
              }
            />
          )}
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
          {location.state === "upload-review" && (
            <div className="Rating_up">
              <p>별점</p>
              <Rating
                precision={0.5}
                value={postInfo.star}
                onChange={(event, newValue) => {
                  setPostInfo((prev) => ({
                    ...prev,
                    star: newValue,
                  }));
                }}
              />
              <p>
                {Number.isInteger(postInfo.star)
                  ? postInfo.star.toFixed(1)
                  : postInfo.star}
              </p>
            </div>
          )}
          <ReactQuill
            ref={quillRef}
            className="Quill"
            value={postInfo.content}
            modules={modules}
            onChange={handleContentChange}
          />
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
