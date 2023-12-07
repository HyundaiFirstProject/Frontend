import MyPageListItem from "./MyPageListItem";
import "assets/CSS/Mypage/MypageList.css";
const MyPageList = ({ props }) => {
  return (
    <div className="MypageList">
      {props.item.map((item, index) => (
        <MyPageListItem props={item} key={`${index}`} />
      ))}
      {props.item.length % 3 === 1 && <div className="filler" />}
      {props.item.length % 3 === 2 && <div className="filler2" />}
    </div>
  );
};
export default MyPageList;
