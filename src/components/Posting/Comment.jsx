import React, { useState, useEffect } from "react";
import UserIMG from "components/UserProfile/userIMG";
import "assets/CSS/Posts/Comments.css";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import DateCheck from "utils/DateCheck";
const Comments = React.forwardRef(({ props }, ref) => {
  //postid로 댓글 가져오기
  //해당 댓글 내가 좋아요 했늕지 안했는지 가져오기
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleInputChange = (e) => {
    const text = e.target.value;
    const chunks = text.match(/.{1,35}/g); // 50글자 단위로 문자열을 나눔

    if (chunks) {
      const formattedText = chunks.join("\n"); // 나눈 문자열을 줄바꿈으로 합침
      setNewComment(formattedText);
    } else {
      setNewComment(text); // 50글자보다 작은 경우, 원본 문자열 설정
    }
  };
  useEffect(() => {
    setComment([
      {
        rno: 4,
        writer: "댓글쓴사람",
        reply: "댓글내",
        regdate: "2023-12-10-18-57",
        updatedate: "2023-12-10-18-57",
        likes: 20,
        postid: 21,
      },
      {
        rno: 4,
        writer: "댓글쓴사람",
        reply: "~~~~~~~",
        regdate: "2023-12-10-18-57",
        updatedate: "2023-12-10-18-57",
        likes: 20,
        postid: 21,
      },
      {
        rno: 4,
        writer: "댓글쓴사람",
        reply: "~~~~~~~",
        regdate: "2023-12-10-18-57",
        updatedate: "2023-12-09-18-57",
        likes: 20,
        postid: 21,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const uploadComment = (e) => {
    console.log(newComment);
  };
  return (
    <div id="Comments" ref={ref}>
      <div id="numOfComm">
        댓글 <p>{comment.length}</p>
      </div>
      <div>
        <label
          className="comment_input_label"
          htmlFor="title"
          style={{
            height: `${5 + Math.floor(newComment.length / 35) * 3}rem`,
          }}
        >
          <div className="useIMGCOMM">
            <UserIMG
              props={{
                no: 1,
                //img_url: "false",
                img_url:
                  "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
              }}
              className="userIcon_comment"
            />
          </div>
          <textarea
            style={{
              height: `${3 + Math.floor(newComment.length / 35) * 3}rem`,
            }}
            className="comment_input"
            placeholder="따뜻한 댓글은 작성자에게 큰 힘이 됩니다 :)"
            value={newComment}
            onChange={handleInputChange}
          />
          <button
            disabled={newComment === "" ? true : false}
            onClick={uploadComment}
          >
            등록
          </button>
        </label>

        {comment.map((com, idx) => (
          <div key={idx} id="comment_div">
            <div className="useIMGCOMM_bottom">
              <UserIMG
                props={{
                  no: 1,
                  //img_url: "false",
                  img_url:
                    "https://harpersbazaar.com.au/wp-content/uploads/2023/10/Press-Image-under-embargo-until-3pm-AEDT-Friday.jpg",
                }}
                className="userIcon_comment"
              />
              <p>{com.writer}</p>
              <button>삭제</button>
            </div>
            <div className="useIMGCOMM_bottom2">
              <p className="comment_likes_P">{com.reply}</p>
              <div className="comment_likes">
                <div>{DateCheck(com.updatedate)}</div>
                {heart && (
                  <PiHeartThin
                    className="heart-thin-animation2"
                    onClick={() => {
                      setHeart(!heart);
                    }}
                  />
                )}
                {!heart && (
                  <PiHeartFill
                    className="heart-fill-animation2"
                    onClick={() => {
                      setHeart(!heart);
                    }}
                  />
                )}
                <div>{com.likes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
export default Comments;
