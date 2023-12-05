import "assets/CSS/List/ListLayout.css";
import ListItem from "components/List/ListItem";
const ListLayout = ({ props }) => {
  return (
    <div
      className={
        props.item[0].product !== undefined ? "LayoutReview" : "ListLayout"
      }
    >
      {props.item.map((item, index) => (
        <ListItem props={item} key={`${index}`} />
      ))}
      {props.item.length % 3 !== 0 && <div className="filler" />}
      {props.item.length % 3 === 2 && <div className="filler2" />}
    </div>
  );
};
export default ListLayout;
