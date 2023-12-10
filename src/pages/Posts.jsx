import { useNavigate, useParams } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ImgPosts from "components/Posting/ImgPosts";
import DateCheck from "utils/DateCheck";
import "assets/CSS/Posts/Posts.css";
import UserIMG from "components/UserProfile/userIMG";
import SideBar from "components/Posting/SideBar";
import Comment from "components/Posting/Comment";
import { FaStar } from "react-icons/fa";
const Posts = () => {
  const { postID } = useParams();
  const navigate = useNavigate();
  const postInfo = {
    id: 13,
    title: "제목제목zzzz 제목",
    content:
      "내용sdfsdfasddfas \n\nsfasdfuakwhfiawufhnskdjfnaeuilrfhnwe\nsdkjfhnaiseukfnawskjdn\nsfasdfuakwhfiawufhnskdjfnaeuilrfhnwe\nsdkjfhnaiseukfnawskjdcvn\nsfasdfuakwhfiawufhnskdjfnaeuilrfhnwe\nsdkjfhnaiseukfnawskjdcvn\nsfasdfuakwhfiawufhnskdjfnaeuilrfhnwe\nsdkjfhnaiseukfnawskjdcvcv\nsdfnaiosefhnawjksdfnsjkldfnasd\nsdjnfoaierfhnaslkdfns~~~",
    img: [
      "https://img.allurekorea.com/allure/2023/08/style_64d0bb3f18816-525x700.jpg",
      "https://cdn.jejusori.net/news/photo/202210/408666_414268_125.jpg",
      "https://img.allurekorea.com/allure/2023/08/style_64d0b9fd307d8-525x700.jpg",
    ],
    date: "2023-12-10-18-57",
    type: "cat",
    view: 20,
    likes: 16,
    userID: 1,
    product: "아이ss",
    star: 3.5,
  };
  const userInfo = {
    nickname: "ㅎsefdsfsdㅎㅎs",
    //"false",
    img_url:
      "https://www.apple.com/newsroom/images/2023/11/taylor-swift-is-apple-musics-artist-of-the-year-for-2023/tile/Apple-Music-Awards-Artist-of-the-Year-Taylor-Swift.jpg.news_app_ed.jpg",
  };

  const status = postInfo.product === undefined ? "list-pets" : "list-review";

  return (
    <div id="Posts">
      <Header />
      <SideBar props={postInfo} />
      <div id="postInfoSub">
        <div id="postInfouserInfo">
          <UserIMG props={userInfo} className="posting" />
          <div id="postInfouserInfo_text">
            <p>{userInfo.nickname}</p>
            <div>{DateCheck(postInfo.date)}</div>
          </div>
        </div>
        {status === "list-review" && (
          <div id="item_post">
            <a
              href="https://react-icons.github.io/react-icons/search/#q=star"
              target="_blank" // 링크가 새 탭에서 열리도록 설정
              rel="noopener noreferrer"
            >
              <img
                src="https://cache.umusic.com/_sites/_halo/zrskt/tte/thmdebam.jpg"
                alt=""
              />
              <p>{postInfo.product}</p>
            </a>
          </div>
        )}
        <div id="postView">
          <p> 조회수</p> <p>{postInfo.view}</p>
        </div>
      </div>
      <ImgPosts props={postInfo.img} />
      <div id="postInfoTop">
        {status === "list-pets" && (
          <div id="postInfoType">
            {postInfo.type === "cat" && <p> 🐱 </p>}
            {postInfo.type === "dog" && <p>🐶 </p>}
            {postInfo.type === "bird" && <p>🐥 </p>}
            {postInfo.type === "fish" && <p> 🐟 </p>}
            {postInfo.type === "설치류" && <p> 🐹 </p>}
            {postInfo.type === "파충류/양서류" && <p>🦖 </p>}
            {postInfo.type === "기타" && <p>🐉 </p>}
          </div>
        )}
        {status === "list-review" && (
          <div id="postInfoStar">
            <FaStar />
            <p>
              {Number.isInteger(postInfo.star)
                ? postInfo.star.toFixed(1)
                : postInfo.star}
            </p>
          </div>
        )}
        <div
          id="postInfoTitle"
          style={{ height: `${2 + (postInfo.title.length / 18) * 2}rem` }}
        >
          <p> {postInfo.title}</p>
          <button
            onClick={(e) => {
              navigate(`/upload/${status}/${postID}`, {
                state: { postInfo },
              });
            }}
          >
            수정
          </button>
        </div>
      </div>
      <div id="postContent">
        {postInfo.content.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <Comment />
      <Footer props={postInfo.id} />
    </div>
  );
};
export default Posts;
