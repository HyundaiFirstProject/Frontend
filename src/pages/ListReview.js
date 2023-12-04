import React from "react";
import ListItem from "components/listComponents/ListItem";
import dummy from "assets/dummyForTest/dummy.json";
const ListReview = () => {
  return (
    <div>
      {dummy.item.map((item, index) => (
        <ListItem props={item} key={`${index}`} />
      ))}
    </div>
  );
};
export default ListReview;
