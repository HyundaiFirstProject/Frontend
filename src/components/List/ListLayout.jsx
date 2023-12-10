import "assets/CSS/List/ListLayout.css";
import ListItem from "components/List/ListItem";
//import { useParams } from "react-router-dom";
const ListLayout = ({ props }) => {
  //const { pageNumber } = useParams();
  return (
    <div
      className={
        props.item[0].product !== undefined ? "LayoutReview" : "ListLayout"
      }
    >
      {props.item.map((item, index) => (
        <a
          href={
            props.item[0].product !== undefined
              ? `/list-review/posts/1/13`
              : `/list-pets/posts/1/13`
          }
          key={`${index}`}
        >
          {/* // <a
          href={
            props.item[0].product !== undefined
              ? `/list-review/${pageNumber}/${item.postID}`
              : `/list-pets/${pageNumber}/${item.postID}`
          }
        > */}
          <ListItem props={item} />
        </a>
      ))}
      {props.item.length % 3 !== 0 && <div className="filler" />}
      {props.item.length % 3 === 2 && <div className="filler2" />}
    </div>
  );
};
export default ListLayout;
